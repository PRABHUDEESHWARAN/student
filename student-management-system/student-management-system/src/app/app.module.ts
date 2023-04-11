import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { UploadAttendanceComponent } from './admin/upload-attendance/upload-attendance.component';
import { UploadMarksComponent } from './admin/upload-marks/upload-marks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewAttendanceComponent } from './student/view-attendance/view-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddStudentComponent,
    UploadAttendanceComponent,
    UploadMarksComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    ViewMarksComponent,
    ViewAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
