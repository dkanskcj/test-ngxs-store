import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AuthActions } from "./auth.actions";

export interface AuthModel {
    name: string;
    password: string;
    isLoggedIn: boolean;
}

export const AUTH_STATE_TOKEN = new StateToken<AuthModel>('auth');

@State<AuthModel>({
    name: AUTH_STATE_TOKEN,
    defaults: {
        name: '',
        password: '',
        isLoggedIn: false
    }
})
@Injectable()
export class AuthState{

    constructor(

    ){}

    @Action(AuthActions.Login)
    login(ctx: StateContext<AuthModel>){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            name: '',
            password: '',
            isLoggedIn: true
        });
    }

    @Action(AuthActions.Logout)
    logout(ctx: StateContext<AuthModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            name: '',
            password: '',
            isLoggedIn: false
        });
    }
}