import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() vertical: boolean;
  @Input() horizontal: boolean;
  @Input() data:  Array<string>;
  constructor() { }

  ngOnInit() {}

}
