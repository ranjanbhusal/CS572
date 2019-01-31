import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
   <p [ngStyle] = "{backgroundColor: findColor()}">{{servername}} is {{serverStatus}}</p> 
  `,
  styles: []
})
export class ServerComponent implements OnInit {
  @Input() servername
  serverStatus: String = Math.random() > 0.5 ? 'online': 'offline';
  constructor() { }

  findColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit() {
  }

}
