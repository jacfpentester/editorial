export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IRespuestaLogin2 {
    token: string;
    email: string;
    password: string;
}

export interface IUserApi {
    email: string;
    password: string;
    fullName: string;
    isActive?: boolean;
    roles: string[]
}
export interface IRespuestaLogin {
    token: string;
    user: IUserApi;
    
}

