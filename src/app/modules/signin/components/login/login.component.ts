import { AuthenticationService } from 'src/app/shared_kernel/services/authentication';
import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared_kernel/bases/BaseComponent';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent extends BaseComponent {

  constructor(authService: AuthenticationService) {
    super(authService, 'Login');

  }
}
