import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  componentCounterValue = 5;
  msg:string = '';

  count (e) {
    this.msg = e;
  }



}
