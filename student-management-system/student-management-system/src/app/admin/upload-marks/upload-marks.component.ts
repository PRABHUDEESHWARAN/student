import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-marks',
  templateUrl: './upload-marks.component.html',
  styleUrls: ['./upload-marks.component.css'],
})
export class UploadMarksComponent implements OnInit {
  searchStudentObj = {
    searchStudentId: '',
    search: false,
  };
  marks!: FormGroup;
  constructor() {}
  searchStudent() {
    console.log(this.searchStudentObj);

    this.searchStudentObj.search =
      this.searchStudentObj.searchStudentId.length > 0;
    this.searchStudentObj.searchStudentId = '';
  }
  ngOnInit(): void {
    this.marks = new FormGroup({
      sub1: new FormControl('', [Validators.required]),
      sub2: new FormControl('', [Validators.required]),
      sub3: new FormControl('', [Validators.required]),
      sub4: new FormControl('', [Validators.required]),
      sub5: new FormControl('', [Validators.required]),
      sub1Name: new FormControl('', [Validators.required]),
      sub2Name: new FormControl('', [Validators.required]),
      sub3Name: new FormControl('', [Validators.required]),
      sub4Name: new FormControl('', [Validators.required]),
      sub5Name: new FormControl('', [Validators.required]),
    });
  }
  uploadMarks(marks: FormGroup): void {
    console.log(marks.value);
  }
}
