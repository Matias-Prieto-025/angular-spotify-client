import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      return this.goToHome();
    }
    this.authService.authRedirect();
  }

  private goToHome() {
    this.router.navigate(['/home']);
  }

}
