import { actionTypes } from "../actions/register";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  success: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        user: { ...state, ...payload },
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        success: { ...state, ...payload },
      };

    case actionTypes.ERROR:
      return {
        ...state,
        error: { ...state, ...payload },
      };

    default:
      return state;
  }
};
