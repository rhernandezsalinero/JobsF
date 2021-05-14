import { FormGroup, FormBuilder } from '@angular/forms';
import { JobsService } from './../services/jobs.service';
import { Job } from './../models/jobs.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

 form: FormGroup

  offers: Array<Job> = []
  constructor(private activeRoute: ActivatedRoute, private jobsService: JobsService, private fb: FormBuilder) {
    this.form = this.fb.group({
      busqueda: [''],
      tipo: [''],
      localizacion: ['']

    })
   }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(value => {
      if (value.name != undefined) {
        this.form.patchValue({
          busqueda: value.name
        })
        this.loadOferts()
      }else{
        this.loadOferts()
      }
    })

  }

  get f(){
    return this.form.controls
  }

  loadOferts() {
    console.log("obtenemos jobs")
    this.jobsService.getJobs(this.f.busqueda.value, this.f.tipo.value, this.f.localizacion.value, ).subscribe(
      (data) => {
        this.offers = data
      },
      (error) => {
        console.log("Error:", error);
      }
    )
  }

}
