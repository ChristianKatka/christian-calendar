import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '@shared/models/event.model';

@Component({
  selector: 'app-day-view-container',
  templateUrl: 'day-view.container.html',
  styleUrls: ['day-view.container.scss'],
})
export class DayViewContainerComponent implements OnInit {
  hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  event: any;

  constructor() {}

  ngOnInit(): void {
    this.event.title = 'Hammaslääkäri';
    const startDate = new Date(); // Replace with your event date
    startDate.setHours(1);
    startDate.setMinutes(30);

    this.event.startDate = startDate;

    const endDate = new Date(); // Replace with your event date
    endDate.setHours(3);
    // endDate.setMinutes(50);

    this.event.endDate = endDate;

    this.event.startDateTopPixelValue = this.calculateTopPixelsFromDate(
      this.event.startDate
    );
    // console.log(
    //   `Top value for ${eventDate.toLocaleTimeString()} is ${topValue}`
    // );
  }

  calculateTopPixelsFromDate(date: Date): string {
    const totalMinutes = date.getHours() * 60 + date.getMinutes();
    const topPixels = (totalMinutes - 60) * 0.8; // Each hour is 48 pixels, so 60 minutes is 48 * 0.8 pixels

    return topPixels + 'px';
  }

  calculateEventHeight(start: Date, end: Date): string {
    const startMinutes = start.getHours() * 60 + start.getMinutes();
    const endMinutes = end.getHours() * 60 + end.getMinutes();
    const eventDuration = endMinutes - startMinutes;
    const eventHeight = eventDuration * 0.8; // Each minute is 0.8 pixels

    return eventHeight + 'px';
  }
}
