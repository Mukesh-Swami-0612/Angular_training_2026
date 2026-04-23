import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'job/:id',component:JobComponent},
    {path:'saved',component:SavedJobComponent},
    {path:'apply/:id',component:ApplyComponent},
    {path:'login',component:LoginComponent},
    {path:'client',component:ClientComponent}
];
