import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() oddNumbers: number = 0;

}
