import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { XProductUtilsModule } from '../x-product-utils/XProductUtils.module';

@NgModule({
  declarations : [
    LoginComponent,
    SignupComponent
  ],
  imports : [
    XProductUtilsModule,
  ],
  exports : [
    LoginComponent,
    SignupComponent
  ],
  providers : []
})
export class SigninModule {

}
