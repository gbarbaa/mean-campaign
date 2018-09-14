import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import * as _ from "lodash";
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Campaign } from '../lib/service/data/campaign';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss']
})


export class AdDetailComponent implements OnInit {

  campaigns: any;
  groupedCampaignIds: any;
  groupedCampaigns: any;
  creativeid: any;


  constructor(
    private api: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,

    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.api.getCampaigns()
    .subscribe(res => {

      this.campaigns = res;

       this.groupedCampaigns = _.groupBy(this.campaigns, campaign=>campaign.creativeid);

       this.groupedCampaignIds = Object.keys(this.groupedCampaigns);

       this.creativeid = this.route.snapshot.params['creativeid'];

       console.log("creativeid", this.creativeid);

       this.campaigns = JSON.stringify(this.groupedCampaigns[this.creativeid][0]);
      
       console.log("ad",this.campaigns);

    


     }, err => {
       console.log(err);
       if(err.status === 401) {
         this.router.navigate(['login']);
       }
     });

  }


}








