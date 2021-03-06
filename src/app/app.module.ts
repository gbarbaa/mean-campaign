import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FileDropModule } from 'ngx-file-drop';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTabsModule } from "@angular/material";

import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'campaigns',
    component: CampaignComponent,
    data: { title: 'Campaign List' }
  },
  {
    path: 'campaign-details/:id',
    component: CampaignDetailComponent,
    data: { title: 'Campaign Details' }
  },
  {
    path: 'campaign-create',
    component: CampaignCreateComponent,
    data: { title: 'Create Campaign' }
  },
  {
    path: 'campaign-edit/:id',
    component: CampaignEditComponent,
    data: { title: 'Edit Campaign' }
  },
  
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
  component: NotfoundComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    CampaignDetailComponent,
    CampaignCreateComponent,
    CampaignEditComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTabsModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
