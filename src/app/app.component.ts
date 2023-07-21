import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mobileView = true;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 500px or greater!');
          this.mobileView = false;
        } else {
          console.log('Viewport width is less than 500px!');
          this.mobileView = true;
        }
      });
  }
}
