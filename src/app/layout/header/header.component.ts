import { AuthenticationService } from './../../shared_kernel/services/authentication';
import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared_kernel/bases/BaseComponent';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent extends BaseComponent {

  constructor(authService: AuthenticationService) {
    super(authService);

  }




}
