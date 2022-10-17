import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { Observable } from "rxjs";
import { CommentService } from "src/app/service/comment/comment.service";
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
export class AuthState {

    
    constructor(
    ) { }

    @Selector()
    getUserName(state: AuthModel){
        console.log(state.name)
        return state.name;
    }



    @Action(AuthActions.getInputs)
    getInputs(state: StateContext<AuthModel>, formData: any) {
        
        if(formData.formData.name === 'dkanskcj' && formData.formData.password === '1234')
        {
            state.patchState({
                name : formData.formData.name,
                password: formData.formData.password,
                isLoggedIn: true
            })
        }
        else{
            console.log('아이디 또는 비밀번호가 틀렸습니다.')
        }

    }

    // @Action(AuthActions.Login)
    // login(state: StateContext<AuthModel>) {
    //     if (!this.mokupData.password) {
    //         console.log('password input plz');
    //         return;
    //     }
    //     else if (this.mokupData.password === '1234' && this.mokupData.name === 'dkanskcj') {
    //         state.patchState({
    //             name: this.mokupData.name,
    //             password: this.mokupData.password,
    //             isLoggedIn: true
    //         });
    //         console.log(state, 'ttttttt')
    //     }
    //     else {
    //         console.log('아이디 또는 비밀번호가 틀렸어~')
    //     }
    // }

    @Action(AuthActions.Logout)
    logout(state: StateContext<AuthModel>) {
        state.setState({
            name: '',
            password: '',
            isLoggedIn: false
        });
        console.log(state)
    }
}