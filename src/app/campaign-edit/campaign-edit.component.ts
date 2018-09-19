import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {
  campaignForm: FormGroup;
  id:string='';
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
    postalcode: String='';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCampaign(this.route.snapshot.params['id']);
    this.campaignForm = this.formBuilder.group({
      'campaignid' : [null, Validators.required],
      'campaignname' : [null, Validators.required],
      'adid' : [null, Validators.required],
      'adname' : [null, Validators.required],
      'creativeid' : [null, Validators.required],
      'campaignadtype' : [null, Validators.required],
      'campaignexpdate' : [null, Validators.required],
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
      'postalcode': [null, Validators.required],
        
      'adexpdate' : [null, Validators.required],
      'publisher' : [null, Validators.required]
    });
  }

  getCampaign(id) {
    this.api.getCampaign(id).subscribe(data => {
      this.id = data._id;
      this.campaignForm.setValue({
        campaignid: data.campaignid,
        campaignname: data.campaignname,
        adid: data.adid,
        adname: data.adname,
        creativeid: data.creativeid,
        campaignadtype: data.campaignadtype,
        campaignexpdate: data.campaignexpdate,
        adexpdate: data.adexpdate,
        publisher: data.publisher,
        creativeobject: data.creativeobject,
        vehicleid: data.vehicleid,
        vehiclevin: data.vehiclevin,
        make: data.make,
        model: data.model,
        year: data.year,
        color: data.color,
        trim: data.trim,
        vehicleodometer: data.vehicleodometer,
        vehicletitle: data.vehicletitle,
        vehicleprice: data.vehicleprice,
        pacode: data.pacode,
        postalcode: data.postalcode
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateCampaign(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/campaign-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  campaignDetails() {
    this.router.navigate(['/campaign-details', this.id]);
  }

}
