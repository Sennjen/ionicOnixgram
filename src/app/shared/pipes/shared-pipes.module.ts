import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatNumbersPipe } from './format-numbers.pipe';
import { DateParsePipe } from './date-parse.pipe'

const COMPONENTS = [
  FormatNumbersPipe,
  DateParsePipe
];

@NgModule({
  imports: [CommonModule],
  declarations:   [COMPONENTS],
  exports:        [COMPONENTS],
})
export class SharedPipesModule{
  static forRoot() {
    return {
      ngModule: SharedPipesModule,
      providers: []
    }
  }
}
