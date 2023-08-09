import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekViewContainerComponent } from './week-view/week-view.container';
import { MonthViewContainerComponent } from './month-view/month-view.container';
import { DayViewContainerComponent } from './day-view/day-view.container';
import { CalendarFeatureContainerComponent } from './calendar-feature.container';

export const calendarChildRoutes: Routes = [
  {
    path: '',
    redirectTo: 'day',
    pathMatch: 'full',
  },
  {
    path: 'day',
    component: DayViewContainerComponent,
  },
  {
    path: 'week',
    component: WeekViewContainerComponent,
  },
  {
    path: 'month',
    component: MonthViewContainerComponent,
  },
];

export const calendarRoutes: Routes = [
  {
    path: '',
    component: CalendarFeatureContainerComponent,
    children: calendarChildRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(calendarRoutes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
