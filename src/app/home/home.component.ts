import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store, UpdateState } from '@ngxs/store';
import { tap, Observable } from 'rxjs';
import { AuthActions } from '../auth/state/auth.actions';
import { AuthFacade } from '../auth/state/auth.facade';
import { AuthModel, AuthState } from '../auth/state/auth.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  auth$ = this.authFacade.auth$;
  isLoggedIn$ = this.authFacade.isLoggedIn$.pipe(tap(isLoggedIn => console.log('isLoggedIn', isLoggedIn)))

  @Select(AuthState) user$:Observable<AuthModel>;

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
    // isLoggedIn: new FormControl(false)
  });

  constructor(
    private authFacade: AuthFacade,
    private authState: AuthState,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.subscribe(res => {
      console.log(res)
    })
  }


  login() {
    const body = this.createForm.getRawValue();
    // console.log(body)
    this.store.dispatch(new AuthActions.getInputs(body));
    // this.authFacade.login();

    this.user$.subscribe(res=>{
      // console.log(res, 'tt');
    })

    this.createForm.setValue({
      name: '',
      password: '',
    })
  }
  logout(){
    this.authFacade.logout();
  }
}
