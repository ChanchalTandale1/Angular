import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() evenNumbers : number = 0;

}
