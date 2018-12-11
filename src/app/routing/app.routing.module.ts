import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { GeneralModule } from '../modules/general/general.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeneralModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule {

}
