import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  // valueArray: string[];
  valueArray = ["Ujjwol", "Jhonson", "Amir", "Ashok"];

  constructor() { }

  ngOnInit() {
  }

}
