import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  onClickHandle(event) {
    console.log('click!', event);
  }

  ngOnInit(): void {
  }

}
