import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  prefObj = [];

  preferences = [
    { name: 'Business', FCName: 'business', pref: false },
    { name: 'Entertainment', FCName: 'entertainment', pref: false },
    { name: 'General', FCName: 'general', pref: false },
    { name: 'Health', FCName: 'health', pref: false },
    { name: 'Science', FCName: 'science', pref: false },
    { name: 'Sports', FCName: 'sports', pref: false },
    { name: 'Technology', FCName: 'technology', pref: false },
    { name: 'Politics', FCName: 'politics', pref: false }
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      // preferences: this.fb.control('', [Validators.required]),
      business: this.fb.control(false),
      entertainment: this.fb.control(false),
      general: this.fb.control(false),
      health: this.fb.control(false),
      science: this.fb.control(false),
      sports: this.fb.control(false),
      technology: this.fb.control(false),
      politics: this.fb.control(false),

      // frequentSearchs: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  log(i) {
    console.log(i);
    this.preferences[i].pref = !this.preferences[i].pref;
  }
  registerUser() {
    // console.log(this.registerForm.value);
    const val = this.registerForm.value;

    // const val = this.registerForm.value;
    const obj = {
      name: val.name,
      email: val.email,
      password: val.password,
      business: val.business,
      entertainment: val.entertainment,
      general: val.general,
      health: val.health,
      science: val.science,
      sports: val.sports,
      technology: val.technology,
      politics: val.politics,
      frequentSearchs: []
    };
    // const obj = this.registerForm.value;
    console.log(obj);
    // console.log(this.preferences);
    this.userService.register(obj).subscribe();
  }
}
