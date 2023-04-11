import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  studentData: FormGroup;

  constructor() {
    this.studentData = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.pattern('^[0-9]{10}$'),
        Validators.required,
      ]),
      parentName: new FormControl('', [Validators.required]),
      dateOfAdmission: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.email, Validators.required]),
      department: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('', [Validators.required]),
      studentId: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    localStorage.getItem('studentData') &&
      this.studentData.setValue(
        JSON.parse(localStorage.getItem('studentData')!)
      );
    this.studentData.valueChanges.subscribe(() => {
      localStorage.setItem(
        'studentData',
        JSON.stringify(this.studentData.value)
      );
    });
  }

  handleAddStudent(studentData: FormGroup) {
    console.log(studentData.value);
    studentData.reset();
    this.studentData.patchValue({
      department: '',
    });
  }
}
