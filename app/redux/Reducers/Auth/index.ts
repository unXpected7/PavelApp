import { _Action } from "../../Interface"

const initState = {
    isLogin: false,
}

const index = (state = initState, action: _Action) => {
    switch (action.type) {
        case "AUTH_SET":
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default index;