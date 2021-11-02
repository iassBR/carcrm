import { actionTypes } from "../actions/loading"


const initialState = {
    open: false,
    message: 'Carregando...'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        console.log("loading")
        return { ...state, ...payload }

    default:
        return state
    }
}

