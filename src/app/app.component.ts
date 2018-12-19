import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  horizontalData:  Array<string>;
  verticalData:  Array<string>;

  constructor() { }
  ngOnInit() {
    this.horizontalData = ['Locations', 'Check Rates', 'Gifts', 'Food & Wine',  'About', 'Contact'];
    this.verticalData = ['View Availability', 'Gift Certificates', 'General Information', 'Loyalty Program'];
  }
}
