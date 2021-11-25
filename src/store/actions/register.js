import { Http } from "../../config/Http";
import { changeLoading } from "./loading";
import { changeNotify } from "./notify";

export const actionTypes = {
  CHANGE: "REGISTER_CHANGE",
  ERROR: "REGISTER_ERROR",
  SUCCESS: "REGISTER_SUCCESS",
};

export const changeRegister = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const changeError = (payload) => ({
  type: actionTypes.ERROR,
  payload,
});

export const changeSuccess = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);

  dispatch(
    changeRegister({
      name: "",
      email: "",
      password: "",
    })
  );

  dispatch(changeSuccess(true));
};

export const register = (data) => (dispatch) => {
  dispatch(
    changeLoading({
      open: true,
      message: "Cadastrando Usuário",
    })
  );
console.log("data", JSON.stringify(data))
  return Http.post("/auth/register", data)
    .then((response) => {
      if (typeof response !== "undefined") {
        dispatch(changeLoading({ open: false }));

        if (response.data.token) {
          dispatch(
            changeNotify({
              open: true,
              class: "success",
              message: "Usuário cadastrado com sucesso",
            })
          );

          dispatch(setUserToken(response.data.token));
        }
      }
    })
    .catch((error) => {
      if (error.response) {
        dispatch(changeLoading({ open: false }));
        dispatch(changeError(error.response.data.errors));
      }
    });
};
