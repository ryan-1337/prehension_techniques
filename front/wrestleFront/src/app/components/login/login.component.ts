import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {this.login}
  
  login() {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/index', res);
    });
  }
}
