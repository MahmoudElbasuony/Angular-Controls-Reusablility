import { AuthenticationService } from './shared_kernel/services/authentication';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private authService: AuthenticationService) {

  }

  get IsAuthenticated() {
    return this.authService.IsAuthenticated;
  }


  SwitchAutheticate() {
    this.authService.IsAuthenticated = !this.authService.IsAuthenticated;
  }
}
