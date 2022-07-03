import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {this.register}

  register() {
    console.log(this.username, this.password);
    this.authService.register(this.username, this.password).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/index');
    });
  }
}
