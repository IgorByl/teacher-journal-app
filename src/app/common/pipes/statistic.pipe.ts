import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "bracketsdelete" })
export class StatisticPipe implements PipeTransform {
  public transform(value: string): string {
    return value.replace(/[\[\]']+/g, "").replace(/[{()}]/g, "").replace(/"/g, "");
  }
}
