import { actionTypes } from "../actions/notify"

const initialState = {
    open: false,
    horizontal: 'center',
    vertical: 'top',
    class: 'success',
    time: 3000,
    message: 'Dados atualizados com sucesso',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE:
            return { ...state, ...payload }

        default:
            return state
    }
}