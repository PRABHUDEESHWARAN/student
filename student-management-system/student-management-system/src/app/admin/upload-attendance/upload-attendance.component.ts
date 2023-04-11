import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-attendance',
  templateUrl: './upload-attendance.component.html',
  styleUrls: ['./upload-attendance.component.css'],
})
export class UploadAttendanceComponent implements OnInit {
  searchStudentObj = {
    searchStudentId: '',
    search: false,
  };
  constructor() {}
  searchStudent() {
    this.searchStudentObj.search =
      this.searchStudentObj.searchStudentId.length > 0;
    this.searchStudentObj.searchStudentId = '';
  }
  attendance!: FormGroup;
  ngOnInit(): void {
    this.attendance = new FormGroup({
      workingDays: new FormControl('', [Validators.required]),
      daysPresent: new FormControl('', [Validators.required]),
      daysAbsent: new FormControl('', [Validators.required]),
      daysHolidays: new FormControl('', [Validators.required]),
      attendancePercentage: new FormControl('', [Validators.required]),
    });
  }
  uploadMarks(attendance: FormGroup) {
    console.log(attendance.value);
    attendance.reset();
  }
}
