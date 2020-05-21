import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service'
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) {}

  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log(isLoggedIn);
    return isLoggedIn;
  }
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */

}
