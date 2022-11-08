import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endLetterCapital'
})
export class EndLetterCapitalPipe implements PipeTransform {

  transform(str: string, ...args: unknown[]): unknown {
    return str.substr(0, str.length -1) + str[str.length - 1].toUpperCase();;
  }

}
