import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}
  rootURL = 'http:localhost:8080/api';
  auth(user: any) {
    this.http.post(this.rootURL + '/login', user).subscribe((res: any) => {
      localStorage.setItem('userId', res.userId);
      if (res.msg === 'ADMIN') {
        this.router.navigate(['/admin']);
      } else if (res.msg === 'USER') {
        this.router.navigate(['/student']);
      }
    });
  }
  logout(): void {
    this.router.navigate(['/login']);
  }
}
