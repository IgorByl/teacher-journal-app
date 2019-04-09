import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "average", pure: false })
export class AveragePipe implements PipeTransform {
  public transform(value: []): any {
    return (value.reduce(((acc, item) => acc + Number(item)), 0) / value.length).toFixed(2);
  }
}
