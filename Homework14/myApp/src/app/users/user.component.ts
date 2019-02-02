import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  results = [];
  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.results = this.dataService.getCachedData();
  }

}
