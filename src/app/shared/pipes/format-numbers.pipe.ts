import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumbers'
})
export class FormatNumbersPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 1000){
      return value.toString();
    }else if(value < 10000){
      let number = value.toString();
      return number[0]+','+number.substr(1, number.length);
    }else if(value < 1000000){
      return ((value/1000).toFixed(1))+'K';
    }else{
      return ((value/1000000).toFixed(1))+'KK';
    }
  }
}
