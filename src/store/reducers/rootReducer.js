import { combineReducers } from 'redux';
import loadingReducer from '../reducers/loading';
import notifyReducer from '../reducers/notify';
import alertReducer from '../reducers/alert';


const rootReducer = combineReducers({
    loading: loadingReducer,
    notify: notifyReducer,
    alert: alertReducer
});

export default rootReducer;