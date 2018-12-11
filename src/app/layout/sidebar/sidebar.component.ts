import { BaseComponent } from './../../shared_kernel/bases/BaseComponent';
import { AuthenticationService } from './../../shared_kernel/services/authentication';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent {

  constructor(authService: AuthenticationService) {
    super(authService);

  }




}
