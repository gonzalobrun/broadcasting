import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public jwtHelper: JwtHelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    const isExpired = this.jwtHelper.isTokenExpired();

    if (isExpired) {
      window.location.href = 'https://distilleryhackathon2020.b2clogin.com/distilleryhackathon2020.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SignInSignUp&client_id=57900d4d-4b0a-43d1-8c30-6d25d0cb6bfe&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flocalhost%3A4200%2Fcallback&scope=openid%20https%3A%2F%2Fdistilleryhackathon2020.onmicrosoft.com%2F57900d4d-4b0a-43d1-8c30-6d25d0cb6bfe%2Fdistillery&response_type=id_token%20token&prompt=login'
      return false;
    }
    return true;
  }
}
