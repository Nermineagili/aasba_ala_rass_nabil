import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { FromtacheComponent } from './fromtache/fromtache.component';

const routes: Routes = [
  { path: '', component: LoginsignupComponent },
  { path: 'fromtache', component: FromtacheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 