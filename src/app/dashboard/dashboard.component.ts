import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isOpened = false;
  mode = 'side';
  hasBackdrop = true;
  static path = () => ['dashboard'];

  constructor() { }

  ngOnInit() {
  }

  toggleDrawer(opened) {
    this.isOpened = opened;
}

changed() {
  // console.log(this.isOpened);
  // if (this.isOpened === true) {
  //   this.isOpened = !this.isOpened;
  // }
}

}
