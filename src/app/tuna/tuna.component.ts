import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuna',
  templateUrl: './tuna.component.html',
  styleUrls: ['./tuna.component.css']
})
export class TunaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showDetails : boolean = false;
  buttonClicks:string[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.logButtonClick();
  }

  logButtonClick() {
    this.buttonClicks.push(`${this.buttonClicks.length + 1}`);
  }
  

}
