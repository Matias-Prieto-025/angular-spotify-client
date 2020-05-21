import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  authRedirect() {
    const clientId: string = 'fc4a6c9c079d4bf6a1d56013daf88908';
    const redirectUrl: string = 'http://localhost:4200/auth-callback/';
    const scope: string = 'user-read-private user-read-email';
    const responseType = 'token';
    const authUrl: string = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}`;
    window.location.href = authUrl;
  }

  login(token) {
    localStorage.setItem('auth_token', token);
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    this.loggedIn = !!localStorage.getItem('auth_token');
    return this.loggedIn;
  }

}
