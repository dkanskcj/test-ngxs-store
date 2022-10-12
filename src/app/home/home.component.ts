import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthFacade } from '../auth/state/auth.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  auth$ = this.authFacade.auth$;
  isLoggedIn$ = this.authFacade.isLoggedIn$.pipe(tap(isLoggedIn => console.log('isLoggedIn', isLoggedIn)))

  constructor(
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
  }


  login() {
    this.authFacade.login();
  }
  logout(){
    this.authFacade.logout();
  }
}
