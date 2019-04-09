import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "date" })
export class DatePipe implements PipeTransform {
  public transform(value: any): any {
    return value.split(".").map(item => (item.length <= 1) ? ("0" + item) : item).join("/");
  }
}
