import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MembersComponent } from './members/members.component';
import { InsightComponent } from './insight/insight.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { IdComponent } from './member-profile/id/id.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContributionComponent } from './contribution/contribution.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    DashboardComponent,
    MembersComponent,
    InsightComponent,
    AddMemberComponent,
    MemberProfileComponent,
    IdComponent,
    SignUpComponent,
    ContributionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule
    
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
