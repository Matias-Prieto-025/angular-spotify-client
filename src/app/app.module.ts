import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggedInGuardGuard } from './guards/logged-in-guard.guard';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistSearchComponent,
    AuthCallbackComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggedInGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
