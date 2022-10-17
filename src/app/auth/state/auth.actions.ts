export namespace AuthActions{
    export class Login{
        static readonly type = '[Auth] Login';
    }

    export class Logout{
        static readonly type = '[Auth] Logout';
    }

    export class getInputs{
        constructor(
            public formData:any,
        ){}
        static readonly type = '[Auth] getInputs';
    }
}