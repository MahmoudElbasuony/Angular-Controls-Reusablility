import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';


@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TextInputComponent,
    FormsModule
  ],
  providers: [

  ],
})
export class XProductUtilsModule {

}
