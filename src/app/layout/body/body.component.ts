import { BaseComponent } from './../../shared_kernel/bases/BaseComponent';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/shared_kernel/services/authentication';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.scss']
})
export class BodyComponent  extends BaseComponent {

  constructor(authService: AuthenticationService) {
    super(authService);

  }




}

