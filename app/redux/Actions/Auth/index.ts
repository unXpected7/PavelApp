import { _Auth } from '../../Interface'
export const actAuthSet = (payload: _Auth) => ({
    type: 'AUTH_SET',
    payload,
});
