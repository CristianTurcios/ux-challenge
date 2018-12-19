import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  percentages: Array<string>;
  constructor() { }

  ngOnInit() {
    this.percentages = ['70%', '60%', '80%',  '100%',  '120%', '150%', '120%', '100%', '80%', '70%', '60%', '30%'];
  }

}
