import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AuthActions } from "./auth.actions";

export interface AuthModel {
    isLoggedIn: boolean;
}

export const AUTH_STATE_TOKEN = new StateToken<AuthModel>('auth');

@State<AuthModel>({
    name: AUTH_STATE_TOKEN,
    defaults: {
        isLoggedIn: false
    }
})
@Injectable()
export class AuthState{
    @Action(AuthActions.Login)
    login(ctx: StateContext<AuthModel>){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            isLoggedIn: true
        });
    }

    @Action(AuthActions.Logout)
    logout(ctx: StateContext<AuthModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            isLoggedIn: false
        });
    }
}