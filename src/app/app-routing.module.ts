import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDescriptionComponent } from './app-description/app-description.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/description', pathMatch: 'full' },
  { path: 'description', component: AppDescriptionComponent },
  { path: 'face-detector', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
