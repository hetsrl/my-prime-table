import { PipeTransform } from '@angular/core';

export class MyTablePipeItem{
  pipe: PipeTransform;
  args: Array<any> | undefined;

  constructor(pipe: PipeTransform, args?: Array<any>) {
    this.pipe = pipe;
    this.args = args;
  }

}
