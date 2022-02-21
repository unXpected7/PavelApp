export default interface _Auth {
    isLogin?: boolean;
    user?: _AuthUser;
    token?: string;
}

export interface _AuthUser {
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
    picture: URL;
}