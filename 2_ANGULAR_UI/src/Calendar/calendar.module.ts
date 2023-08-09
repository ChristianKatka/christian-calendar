import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { components } from '.';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, CalendarRoutingModule, SharedModule],
  declarations: [...components],
  exports: [...components],
})
export class CalendarModule {}
