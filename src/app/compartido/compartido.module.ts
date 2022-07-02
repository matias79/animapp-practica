import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezeraComponent } from './cabezera/cabezera.component';



@NgModule({
  declarations: [
    CabezeraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CabezeraComponent
  ]
})
export class CompartidoModule { }
