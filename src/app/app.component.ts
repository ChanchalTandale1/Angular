import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'A6';

  myObservable= new Observable((observer)=>{
    console.log('Observable Starts');
    setTimeout(() => {observer.next("1")}, 5000);
    setTimeout(() => {observer.next("2")}, 5000);
    setTimeout(() => {observer.next("3")}, 5000);
    setTimeout(() => {observer.next("4")}, 5000);
    setTimeout(() => {observer.next("5")}, 5000);

    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
  });

  ngOnInit(): void {
    // this.myObservable.subscribe((val)=>{
    //   console.log(val);
    // });
  }
}



