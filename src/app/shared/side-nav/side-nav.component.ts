import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  adminFlag = false;
  constructor() {

    if ( JSON.parse(localStorage.getItem('sessionLogin')).username === 'admin') {
      this.adminFlag = true;
    }
  }

  ngOnInit() {

  }

}
