import { combineReducers } from 'redux';
import loadingReducer from '../reducers/loading';
import notifyReducer from '../reducers/notify';
import alertReducer from '../reducers/alert';
import authReducer from '../reducers/auth';


const rootReducer = combineReducers({
    loading: loadingReducer,
    notify: notifyReducer,
    alert: alertReducer,
    auth: authReducer
});

export default rootReducer;