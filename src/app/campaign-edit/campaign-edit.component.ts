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
  id:string = '';
  campaignid:string='';
  campaignname:string='';
  adid:string='';
  adname:string='';
  creativeid:string='';
  campaignadtype:string='';
  campaignexpdate:string='';
  adexpdate:string='';
  publisher:string='';

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
        publisher: data.publisher
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
