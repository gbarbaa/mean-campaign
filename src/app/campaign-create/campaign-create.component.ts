import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs/observable/of';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.scss']
})
export class CampaignCreateComponent implements OnInit {

  campaignForm: FormGroup;
  campaignid:string='';
  campaignname:string='';
  adid:string='';
  adname:string='';
  creativeid:string='';
  campaignadtype:string='';
  campaignexpdate:string='';
  adexpdate:string='';
  publisher:string='';

  constructor(private http: HttpClient, private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.campaignForm = this.formBuilder.group({
      'campaignid' : [null, Validators.required],
      'campaignname' : [null, Validators.required],
      'adid' : [null, Validators.required],
      'adname' : [null, Validators.required],
      'creativeid' : [null, Validators.required],
      'campaignadtype' : [null, Validators.required],
      'campaignexpdate' : [null, Validators.required],
      'adexpdate' : [null, Validators.required],
      'publisher' : [null, Validators.required]
    }, err => {
        if(err.status === 401) {
          this.router.navigate(['login']);
        }
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postCampaign(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/campaign-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}