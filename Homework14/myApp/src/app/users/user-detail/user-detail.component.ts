import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  private userId;
  private userData;
  private paramSubcription;

  constructor(private route: ActivatedRoute, private users: DataService) {
    this.paramSubcription = route.params.subscribe(params => {
      this.userId = params["id"];
    });
  }

  ngOnInit() {
    this.userData = this.users
      .getCachedData()
      .find(user => user.login.uuid == this.userId);
  }

}
