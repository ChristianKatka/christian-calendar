import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space-giver-used-with-navbar',
  templateUrl: 'space-giver-used-with-navbar.component.html',
})
export class SpaceGiverUsedWithNavbarComponent {
  @Input()
  height = 65;
}
