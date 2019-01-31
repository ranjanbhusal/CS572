import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: []
})
export class ServersComponent implements OnInit {
  serverCreated: boolean = false;
  serverName: string = 'testServer';
  servers = ['testServer1', 'testServer2'];
  @ViewChild ('serverNameInput')serverNameInput: ElementRef;

  onButtonClicked (servername: HTMLInputElement) {
    this.serverName = servername.value;
    //this.serverName = this.serverNameInput.nativeElement.value;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  constructor() { }

  ngOnInit() {
  }

}
