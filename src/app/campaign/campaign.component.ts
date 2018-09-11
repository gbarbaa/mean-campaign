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
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  public valueSearch: string = '';
  public search: string = null;
  campaigns: any;
  groupedCampaignIds = [];
  groupedCampaigns = [];

  displayedColumns = ['campaignname', 'adname', 'campaignexpdate', 'adexpdate'];
  dataSource = new CampaignDataSource(this.api);

  constructor(
    private api: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
){
  this.activeRoute.queryParams.subscribe(params => {
    this.search = _.lowerCase(params["search"]);

      if(this.search != undefined){
        this.valueSearch = this.search;
    }
  });
}

  ngOnInit() {

  
   this.api.getCampaigns()
     .subscribe(res => {

       this.campaigns = res;

        this.groupedCampaigns = _.groupBy(this.campaigns, campaign=>campaign.campaignid);

        this.groupedCampaignIds = Object.keys(this.groupedCampaigns);


      }, err => {
        console.log(err);
        if(err.status === 401) {
          this.router.navigate(['login']);
        }
      });
  }

  private selectedCampaign: Campaign;
  selectCampaign(e){
    this.selectedCampaign =  e;
    console.log("e", e);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}

export class CampaignDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getCampaigns();
  }

  disconnect() {

  }
}




