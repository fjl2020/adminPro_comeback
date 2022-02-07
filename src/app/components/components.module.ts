import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [
    IncrementerComponent,DoughnutComponent
  ],
  imports: [
    CommonModule,FormsModule,NgChartsModule
  ],
  exports:[
    IncrementerComponent,DoughnutComponent
  ]
})
export class ComponentModuleModule { }
