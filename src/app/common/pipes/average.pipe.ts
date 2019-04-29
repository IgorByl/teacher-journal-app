import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "average", pure: false })
export class AveragePipe implements PipeTransform {
  public transform(value: []): string {
    let counter: number = 0;
    return (
      Object.values(value).reduce((acc, item) => {
        if (item) {
          counter++;
          return acc + Number(item);
        } else {
          return acc;
        }
      },                          0) / counter
    ).toFixed(2);
  }
}
