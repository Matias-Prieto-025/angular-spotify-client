import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const isLoggedIn =  this.authService.isLoggedIn();
    if (isLoggedIn) {
      return this.goToHome();
    }
    this.route.fragment.subscribe(fragment => {
      const access_token = new URLSearchParams(fragment).get('access_token');
      this.performLogin(access_token);
      this.goToHome();
    });
  }

  private performLogin(access_token) {
    this.authService.login(access_token)
  }

  private goToHome() {
    this.router.navigate(['/home']);
  }

}
