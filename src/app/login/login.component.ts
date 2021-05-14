import { User } from './../models/user.model';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mForm: FormGroup;
  isSend = false;



  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) {
    this.mForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
        ],
      ],
    });
  }

  ngOnInit() { }

  get f() {
    return this.mForm.controls;
  }

  sendData() {
    this.isSend = true;
    //console.log('Guardar!!', this.mForm);
    // console.log(this.f.email.errors)
    // console.log(this.f.password.errors)

    if (this.mForm.invalid) {
      console.error('El formulario NO es válido');
      return;
    } else {
      console.log('El formulario es válido');
    }


    //Hacer llamada al servicio
    //Dos servicios user y people
      const user: User = new User();
      user.email = this.f.email.value;
      user.password =  this.f.password.value;
      this.userService.login(user).subscribe(
        (data: any) => {
          localStorage.setItem("token", data.access_token)
          this.router.navigate(['/panel']);
          console.log(data);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }





  }

