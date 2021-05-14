import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup
  isSend = false

  constructor(private fb: FormBuilder, private router: Router,) {
    this.sForm = fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]]
    })
   }

  ngOnInit() {
  }

  get f(){
    return this.sForm.controls
  }

  saveData() {
    this.isSend = true
    console.log("Guardar!!", this.sForm);
    console.log(this.f.userName.errors)
    console.log(this.f.email.errors)
    console.log(this.f.password.errors)

    if(this.sForm.invalid) {
      console.error("El formulario NO es válido");
      return
    } else{
      this.router.navigate(["/login"])
      console.log("El formulario es válido");
    }

    // const user: User = new User();
    // user.email = this.f.email.value;
    // user.password =  this.f.password.value;
    // this.userService.signup(user).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigate(['/login']);
    //   },
    //   (error) => {
    //     console.log('Error:', error);
    //   }
    // );

}}
