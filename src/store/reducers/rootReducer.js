import { combineReducers } from 'redux';
import loadingReducer  from '../reducers/loading';

const rootReducer = combineReducers({
    loading: loadingReducer
});

export default rootReducer;