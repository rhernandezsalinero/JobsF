import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCompany: Boolean = true
  isEmpleado: Boolean = true
  bgBlue = false

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        if (route.url.includes("detail") ) {
          this.bgBlue = true
        }else{
          this.bgBlue = false
        }
      }

    })

    if (this.auth.isAuthenticated()) {
        const user = localStorage.getItem("token")
        /* if (user.role == "company") {

        } else {

        } */
    }
  }

  ngAfterContentInit() {
    this.bgBlue = true
  }

  login() {

      this.router.navigate(['/login'])

  }

  newOfert(){
    this.router.navigate(['/new'])
  }
}
