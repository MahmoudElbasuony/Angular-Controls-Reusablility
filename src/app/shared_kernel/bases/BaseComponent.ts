import { AuthenticationService } from './../services/authentication';


export class BaseComponent {


  constructor(private authService: AuthenticationService, private title: string = null) {


  }

  get IsAuthenticated() {
    return this.authService.IsAuthenticated;
  }

  get Title() {
    return this.title;
  }

}
