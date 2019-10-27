import selectUser from './userReducer';
import selectBank from './bankReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    // userID: () => '5ca3d0c692345a1ff3b55ac3'
    selectUser: selectUser,
    selectBank
})

export default reducers
