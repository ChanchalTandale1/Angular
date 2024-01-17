import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {

  num1 = 0;
  interval: any;
  
  evenNumbers: number = 0;
  oddNumbers: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  Startgame(){
      this.interval = setInterval(() => this.numIncrement(), 1500);
}

//   numIncrement() {
//     this.num1++;
// }

numIncrement() {
  this.num1++;
  const number = this.num1; //Assigning incremented num1 to number

  if (number % 2 === 0) {
    this.evenNumbers = number;
  } else {
    this.oddNumbers = number;
  }
}

  PauseGame(){
    clearInterval(this.interval);
    //resetting All to zero
    this.num1=0;  
    this.evenNumbers = 0; 
    this.oddNumbers = 0; 
  }

}
