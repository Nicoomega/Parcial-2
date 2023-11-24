import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DinoListComponent } from './dino-list/dino-list.component';
@NgModule({
  imports: [CommonModule],
  exports: [DinoListComponent],
  declarations: [DinoListComponent],
})
export class DinoModule {}
