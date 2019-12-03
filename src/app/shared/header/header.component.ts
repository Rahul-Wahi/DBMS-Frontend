import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isOpened = new EventEmitter();
  @Input() closed: boolean;
  opened = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleDrawer() { // You can give any function name
    this.opened = !this.opened;
    this.isOpened.emit(this.opened);
}

logout(){
  localStorage.removeItem('sessionLogin');
  this.router.navigate(['/authenticator/login']);
}

}
