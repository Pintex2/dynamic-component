import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[DynamicTableComponent]
})
export class SharedModule { }
