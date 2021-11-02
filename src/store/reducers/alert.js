import { actionTypes } from "../actions/alert"


const initialState = {
    open: false,
    time: 3000,
    class: 'success',
    message: 'Lorem ipsu...'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE:
            return { ...state, ...payload }

        default:
            return state
    }
}

