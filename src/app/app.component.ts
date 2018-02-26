import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model: NgbDateStruct;
  public file: File;
  public users: any[];
  public userProfile: any;
 


  constructor(public _userService: UserService) { }

  ngOnInit() {
    let THIS = this;
    THIS.getUsers();
  }

  public getUsers() {
    let THIS = this;
    THIS._userService._getUsers()
     .subscribe(data => {
       console.log('data',data)
       if (data.status == 1) {
          THIS.users = data.result.users;
       }
     });
  }

  uploadFile(event) { 
   let THIS = this;
   THIS.file = event.target.value;
   console.log('file', THIS.file);

  }

  onSubmit(f) {
    let THIS = this;
     THIS._userService.saveUser(f, THIS.file)
      .subscribe(data => {
        console.log('data',data)
        THIS.userProfile = data.result.user;
      });
  }

}
