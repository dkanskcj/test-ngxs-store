import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { AuthFacade } from './state/auth.facade';
import { LoggedInGuard } from './state/logged-in.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [
    AuthFacade,
    LoggedInGuard
  ]
})
export class AuthModule { }
