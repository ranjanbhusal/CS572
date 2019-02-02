import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [DataService],
  exports: [UserComponent, UserDetailComponent],
  bootstrap: [UserComponent]
})

export class UsersModule { }
