import { _Action } from "../../Interface"

const initState = {
    loading: false,
}

const index = (state = initState, action: _Action) => {
    switch (action.type) {
        case "GLOBAL_LOADING":
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default index;