import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class AppFirstComponent implements OnInit {
  name: string = 'First Component';
  constructor() {}
  ngOnInit() {}
}
