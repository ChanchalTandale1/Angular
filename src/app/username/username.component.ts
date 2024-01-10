import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username : string = '';

  resetUser(){
    this.username = '';
  }
 
}
