import { PipeTransform } from '@angular/core';

export class MyTablePipeItem{
  pipe: PipeTransform;
  args: Array<any>;

  constructor(pipe: PipeTransform, args?: Array<any>) {
    this.pipe = pipe;
    this.args = args;
  }

}
