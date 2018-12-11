import { createStore, combineReducers} from 'redux';
import users from './modules/user';

const reducer = combineReducers({
    users,
})

let store = initialState => createStore(reducer);

export default store();