import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { IMessageResponse } from '../shared/models/validResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
  }


  loginUser() {
    const obj = this.loginForm.value;
    console.log(obj);
    this.userService.login(obj).subscribe(
      (res: IMessageResponse) => {
        console.log(res.message);

        if (res.message === 'Valid') {
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }
}
