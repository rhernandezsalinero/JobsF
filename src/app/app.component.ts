import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobsfront';



  constructor(private router: Router){


  }

  isLogini!: boolean;
  ngOnInit(
  ){
    // const name = localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDZkYzJhMTJmYWU4ZTNjNjBkNjlhNGMiLCJpYXQiOjE2MTg4Mjg4MTAsImV4cCI6MTYxOTQzMzYxMH0.bJT5InthOzTkE_tLsTb3JcEQoeh9Vb-484xc2K0hhGA")

    this.router.events.subscribe (route=>{
      if(route instanceof NavigationEnd){
        if(route.url == "/login" || route.url == "/register"){
          this.isLogini = true
        } else {
          this.isLogini = false
        }
      }
    })
  }
}
