import { JobsService } from './../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Job } from '../models/jobs.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  offers: Array<Job> = []

  constructor(private router: Router, private jobsService: JobsService) { }

  ngOnInit() {
    this.loadOferts()
  }



  loadOferts() {
    this.jobsService.getJobs("", "", "").subscribe(
      (data) => {
        this.offers = data
      },
      (error) => {
        console.log("Error:", error);
      }
    )
  }

  search(searchValue: string) {
    if (searchValue == "") {
      this.router.navigate(["/browser"])
    } else {
      this.router.navigate(["/browser"], { queryParams: { name: searchValue } })
    }
  }

}
