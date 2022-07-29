import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IdComponent } from './member-profile/id/id.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile/:id', component: MemberProfileComponent}
  // {path: 'profile/id', component: IdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
