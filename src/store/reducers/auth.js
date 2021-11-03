import { actionTypes } from "../actions/auth"


const initialState = {
    credentials: {
        email: '',
        password: '',
        device_name: 'desktop',
    },
    errors: {
        email: '',
        password: ''
    },
    success: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE:
            
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    ...payload
                }
            }

        case actionTypes.CHANGE_ERROR:
            
            console.log(payload)
            return {
                ...state,
                errors: {
                    ...state.credentials,
                    ...payload
                }
            }

        case actionTypes.SUCCESS:
            return {
                ...state,
                success: payload
            }

        default:
            return state
    }
}
