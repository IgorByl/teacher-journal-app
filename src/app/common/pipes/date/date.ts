import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "prettyDate" })
export class DatePipe implements PipeTransform {
  public transform(value: string): string {
    return value.split(".").map(item => (item.length <= 1) ? ("0" + item) : item).join("/");
  }
}
