import { Component } from "@angular/core";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { ExcelService } from "src/app/common/services";

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.less"],
})
export class ExportComponent {
  public data = [
    {
      eid: "e101",
      ename: "ravi",
      esal: 1000,
    },
    {
      eid: "e102",
      ename: "ram",
      esal: 2000,
    },
    {
      eid: "e103",
      ename: "rajesh",
      esal: 3000,
    },
  ];
  constructor(private excelService: ExcelService) {}

  public exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, "sample");
  }
  public generatePDF(): void {
    const data: HTMLElement = document.getElementById("contentToConvert");
    html2canvas(data).then(canvas => {
      const imgWidth: number = 190;
      const pageHeight: number = 295;
      const imgHeight: number = (canvas.height * imgWidth) / canvas.width;
      const heightLeft: number = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf: jspdf = new jspdf("p", "mm", "a4");
      const position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf");
    });
  }
}
