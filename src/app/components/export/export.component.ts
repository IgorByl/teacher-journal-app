import { Component } from "@angular/core";
import { ExcelService, PopUpService } from "src/app/common/services";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent, PopUpItem } from "src/app/common/entities";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
    const dd: {} = {
      content: [
        ...this.students.map(item => {
          return {
            text: JSON.stringify(`${item.name} ${item.lastName}: ${item.address}; ${item.description}`) + JSON.stringify(item.subjects),
            style: "header",
          };
        }),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
      },
    };

    pdfMake.createPdf(dd).download("studentsData.pdf");
    this.popUpInfo = this.popUpService.pdfCreatedResolvedPopUp();
  }
}
