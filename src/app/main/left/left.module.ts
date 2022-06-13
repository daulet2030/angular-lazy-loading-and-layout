import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LeftComponent],
  exports: [LeftComponent],
})
export class LeftModule {}
