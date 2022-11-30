import { PipeTransform } from '@angular/core';

export class MyPrimeTablePipeItem{
  pipe: PipeTransform;
  args: Array<any> | undefined;

  constructor(pipe: PipeTransform, args?: Array<any>) {
    this.pipe = pipe;
    this.args = args;
  }

}
