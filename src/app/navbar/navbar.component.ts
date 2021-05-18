import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCompany: Boolean = false
  isLogin: Boolean = false
  bgBlue = false
  currentUser = new User()

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        if (route.url.includes("detail") || route.url.includes("panel")) {
          this.bgBlue = true
        } else {
          this.bgBlue = false
        }
      }

    })

    if (this.auth.isAuthenticated()) {
      this.isLogin = true
      const user = localStorage.getItem('user')
      console.log(user)
      this.currentUser = user !== null ? JSON.parse(user) : new User()

      if (this.currentUser.role == "company") {
        this.isCompany = true
      } else {
        this.isCompany = false
      }
    }
  }

  ngAfterContentInit() {
    this.bgBlue = true
  }

  login() {

    this.router.navigate(['/login'])

  }

  newOfert() {
    this.router.navigate(['/new'])
  }
}
