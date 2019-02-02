import { Component, OnInit } from '@angular/core';
import { DataService } from './users/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myApp';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getOnlineData()
    .subscribe( d => {
      localStorage.data = JSON.stringify(d);
    })
  }
}
