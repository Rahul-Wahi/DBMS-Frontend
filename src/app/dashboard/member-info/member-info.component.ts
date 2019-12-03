import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent implements OnInit {

  memberInfo: any;
  username: any;
  dataSource: any;
  constructor(private router: Router) {
    this.username = JSON.parse(localStorage.getItem('sessionLogin')).username;
    this.memberInfo = JSON.parse(localStorage.getItem(this.username));
    this.dataSource = this.memberInfo;
  }

  ngOnInit() {

    if (localStorage.getItem('sessionLogin') === null) {
      this.router.navigate(['/authenticator/login']);
    }
  }

}
