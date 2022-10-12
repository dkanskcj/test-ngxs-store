import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/auth.facade';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  auth$ = this.authFacade.auth$;
  isLoggedIn$ = this.authFacade.isLoggedIn$.pipe(tap(isLoggedIn => console.log('isLoggedIn', isLoggedIn)))
  constructor(
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
  }

}
