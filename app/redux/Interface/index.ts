import _Auth, { _AuthUser } from './Auth';
import _Global from './Global';

interface _Action {
    type: string;
    payload?: Object;
}

export {
    _Auth,
    _AuthUser,
    _Global,
    _Action
}