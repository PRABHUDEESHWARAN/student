import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { UploadAttendanceComponent } from './admin/upload-attendance/upload-attendance.component';
import { UploadMarksComponent } from './admin/upload-marks/upload-marks.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewAttendanceComponent } from './student/view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'addStudent',
        component: AddStudentComponent,
      },
      {
        path: 'uploadMarks',
        component: UploadMarksComponent,
      },
      {
        path: 'uploadAttendance',
        component: UploadAttendanceComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'viewMarks',
        component: ViewMarksComponent,
      },
      {
        path: 'viewAttendance',
        component: ViewAttendanceComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
