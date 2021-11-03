import { Http } from "../../config/Http"
import { changeLoading, API_VERSION } from "./loading"
import { changeNotify } from "./notify"

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS',
    CHANGE_ERROR: 'AUTH_ERROR'
}
export const authChange = (payload) => ({
    type: actionTypes.CHANGE,
    payload

})
export const authError = (payload) => ({
    type: actionTypes.CHANGE_ERROR,
    payload
})

export const authSuccess = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);

    dispatch(authChange({
        email: '',
        password: ''
    }));

    dispatch(authSuccess(true));
}


export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        message: 'Autenticando usuário.'
    }))

    return Http.post("/auth/token", {
        email: credentials.email,
        password: credentials.password,
        device_name: credentials.device_name,
    })
        .then(response => {
            dispatch(changeLoading({ open: false }));

            if (typeof response !== 'undefined') {
                if (response.data.token) {
                    dispatch(setUserToken(response.data.token));
                }
            }
        })
        .catch(error => {
            dispatch(changeLoading({ open: false }));

            if (typeof error.response != 'undefined') {
                if (error.response.status === 401 || error.response.status === 400 || error.response.status === 422) {
                    // console.log( error.response.data.errors)
                    dispatch(authError({
                        email: error.response.data.errors.email[0],
                        password: error.response.data.errors.password[0]
                    }))
                    dispatch(changeNotify({
                        open: true,
                        message: 'As credenciais informadas não correspondem com nossos registros',
                        class: 'error'
                    }))
                }
            } else {
                dispatch(changeNotify({
                    open: true,
                    message: 'Erro ao se conectar com o servidor',
                    class: 'error'
                }))
            }
        })
};

