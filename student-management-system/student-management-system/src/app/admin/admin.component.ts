import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private login: LoginService) {}
  ngOnInit(): void {}

  handleLogout() {
    this.login.logout();
    localStorage.removeItem('studentData');
  }
}
