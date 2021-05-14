import { NewOfertComponent } from './new-ofert/new-ofert.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';


import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { BrowserComponent } from './browser/browser.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "browser", component: BrowserComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "new", component: NewOfertComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "panel", component: PanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

