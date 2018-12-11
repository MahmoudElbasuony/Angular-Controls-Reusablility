import { BaseComponent } from './../../shared_kernel/bases/BaseComponent';
import { AuthenticationService } from './../../shared_kernel/services/authentication';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent extends BaseComponent {

  constructor(authService: AuthenticationService) {
    super(authService);

  }




}
