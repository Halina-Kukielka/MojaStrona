import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {WorksComponent} from "./works/works.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {SoftwareStackComponent} from "./software-stack/software-stack.component";

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'works', component: WorksComponent},
  {path: 'works', loadChildren: () => import('./works/works.module').then((m) => m.WorksModule)},
  {path: 'about', component: AboutComponent},
  {path: 'software_stack', component: SoftwareStackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
