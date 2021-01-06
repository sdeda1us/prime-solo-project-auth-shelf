import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga(){
    yield takeLatest('FETCH_ITEM', fetchItem);
};

function* addItem(){

}

function* fetchItem() {
    try {
        // clear any existing error on the login page
        const response = yield call(axios.get, '/api/shelf');
        yield dispatch({type:'SET_ITEM', payload: response.data})
    }catch(error){
        console.log('error getting items', error);
    }
}
    
export default itemSaga;