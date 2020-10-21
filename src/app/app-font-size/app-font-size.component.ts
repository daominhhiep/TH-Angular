import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-font-size',
  templateUrl: './app-font-size.component.html',
  styleUrls: ['./app-font-size.component.css']
})
export class AppFontSizeComponent implements OnInit {
  text = '';

  fontSize = 14;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onChange(value) {
    this.fontSize = value;
  }

}
