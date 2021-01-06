import { combineReducers } from 'redux';

const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return action.payload
        default: 
            return state
    }
}

export default combineReducers({
    itemReducer
})