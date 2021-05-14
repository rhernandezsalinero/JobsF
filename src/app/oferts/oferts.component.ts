import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from "@angular/router";

@Component({
  selector: 'app-oferts',
  templateUrl: './oferts.component.html',
  styleUrls: ['./oferts.component.scss']
})
export class OfertsComponent implements OnInit {
@Input() offers: Array<any> = []




  constructor(private router: Router) { }

  ngOnInit() {
  }

  formatDate(date?: string): string {
    return moment(date).locale('es').format("DD [de] MMMM [de] YYYY")
  }




}
