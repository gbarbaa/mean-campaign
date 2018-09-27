import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs/observable/of';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, FormArray, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.scss']
})
export class CampaignCreateComponent implements OnInit {
  campaignForm: FormGroup;
  dealerid: String='';
  dealerName: String='';
  campaignid:string='';
  campaignname:string='';
  adid:string='';
  adname:string='';
  creativeid:string='';
  campaignadtype:string='';
  campaignexpdate:string='';
  adexpdate:string='';
  publisher:string='';
  creativeobject: Object='';
    vehicleid: String='';
    vehiclevin: String='';
    make: String='';
    model: String='';
    year: String='';
    color: String='';
    trim: String='';
    vehicleodometer: String='';
    vehicletitle: String='';
    vehicleprice: String='';
    pacode: String='';
    postalCode: String='';
    disclaimers : [String];
    
  constructor(private http: HttpClient, private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.campaignForm = this.formBuilder.group({
      'dealerid' : [null],
      'dealerName' : [null],
      'campaignid' : [null, Validators.required],
      'campaignname' : [null, Validators.required],
      'adid' : [null, Validators.required],
      'adname' : [null, Validators.required],
      'creativeid' : [null, Validators.required],
      'campaignadtype' : [null],
      'campaignexpdate' : [null, Validators.required],
      'adexpdate' : [null, Validators.required],
      'publisher' : [null],
      'creativeobject' :  [null],
      'vehicleid':  [null],
      'vehiclevin':  [null],
      'make':  [null, Validators.required],
      'model':  [null, Validators.required],
      'year':  [null, Validators.required],
      'color':  [null, Validators.required],
      'trim':  [null],
      'vehicleodometer':  [null],
      'vehicletitle': [null],
      'vehicleprice': [null],
      'pacode': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'disclaimers': [null, Validators.required],

    }, err => {
        if(err.status === 401) {
          this.router.navigate(['login']);
        }
    });
  }

  onFormSubmit(form:NgForm) {
    console.log("form", form);
    this.api.postCampaign(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/campaign-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
