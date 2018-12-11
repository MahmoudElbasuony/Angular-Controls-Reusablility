import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared_kernel/bases/BaseComponent';
import { AuthenticationService } from 'src/app/shared_kernel/services/authentication';
import { RadioOptions, RadioOption } from 'src/app/modules/x-product-utils/shared/models/xp.radio.model';
import { GenderType } from 'src/app/shared_kernel/enums/gender.type';
import { NgForm } from '@angular/forms';
import { SignupModel } from '../../models/signup.modal';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent extends BaseComponent {

  private Genders: RadioOptions;

  private SignupModel: SignupModel;

  constructor(authService: AuthenticationService) {
    super(authService, 'Signup');

    this.Genders = this.GetGendersList();

    this.SignupModel = new SignupModel();

  }



  OnSignup(form: NgForm) {
    console.log(form);

  }



  private GetGendersList(): RadioOptions {

    const radioOptions: RadioOptions = new RadioOptions('Gender', GenderType.Unknown);


    const genders = Object.keys(GenderType);

    genders.forEach((gender: any, indx) => {
      if (isNaN(gender)) {
        radioOptions.Options.push(new RadioOption(GenderType[gender], gender));
      }
    });

    return radioOptions;
  }





}
