import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {


  private _isAuthenticated: boolean;

  get IsAuthenticated() {
    return this._isAuthenticated;
  }

  set IsAuthenticated(authenticated) {
    this._isAuthenticated = authenticated;
  }


  constructor() {
    this._isAuthenticated = false;

  }


}
