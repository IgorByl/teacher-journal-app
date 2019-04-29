import { Component } from "@angular/core";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { ExcelService, PopUpService } from "src/app/common/services";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent, PopUpItem } from "src/app/common/entities";

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.less"],
})
export class ExportComponent {

  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  public popUpInfo: PopUpItem;

  public students: IStudent[] = [];
  public sub: Subscription;

  constructor(
    private excelService: ExcelService,
    private popUpService: PopUpService
  ) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.students, "studentsData");
    this.popUpInfo = this.popUpService.exelCreatedResolvedPopUp();
  }

  public generatePDF(): void {
    const data: HTMLElement = document.getElementById("contentToConvert");
    html2canvas(data).then(canvas => {
      const imgWidth: number = 190;
      const pageHeight: number = 295;
      const imgHeight: number = (canvas.height * imgWidth) / canvas.width;
      const heightLeft: number = imgHeight;

      const contentDataURL: CanvasDrawPath = canvas.toDataURL("image/png");
      let pdf: jspdf = new jspdf("p", "mm", "a4");
      const position: number = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf");
    });
  }
}
