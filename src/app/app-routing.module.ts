import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorksComponent} from "./works/works.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {SoftwareStackComponent} from "./software-stack/software-stack.component";
import {ThreeSceneComponent} from "./three-scene/three-scene.component";
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'works', component: WorksComponent},
  {path: 'works', loadChildren: () => import('./works/works.module').then((m) => m.WorksModule)},
  {path: 'about', component: AboutComponent},
  {path: 'software_stack', component: SoftwareStackComponent},
  {path: 'three', component: ThreeSceneComponent},
  {path:'room', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
