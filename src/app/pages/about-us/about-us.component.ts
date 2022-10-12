import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/auth.facade';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  auth$ = this.authFacade.auth$;
  isLoggedIn$ = this.authFacade.isLoggedIn$.pipe(tap(isLoggedIn => console.log('isLoggedIn', isLoggedIn)))
  constructor(
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
  }

}
