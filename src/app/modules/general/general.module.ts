import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ],
  providers: [

  ],
})
export class GeneralModule {

}
