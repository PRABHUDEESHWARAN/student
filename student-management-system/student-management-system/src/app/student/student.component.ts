import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Student } from '../model/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student!: Student;
  constructor(private login: LoginService) {}
  ngOnInit(): void {
    this.student = {
      studentName: 'Ragul',
      imageUrl: 'asdf',
      department: 'IT',
    };
  }
  handleLogout(): void {
    this.login.logout();
  }
}
