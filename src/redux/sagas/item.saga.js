import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga(){
    // Use takeLatest with the login so that states don't get changed
    yield takeLatest('FETCH_ITEM', fetchItem);
    yield takeLatest('ADD_ITEM', addItem);
};

function* addItem(action) {
    // console.log('index post', action.payload);
    try {
        yield axios.post('/api/shelf', action.payload)
        yield put({ type: 'FETCH_ITEM' })
    } catch (error) {
        console.log('error with add item request', error);
    }
}//end addItem

function* fetchItem() {
    try {
        // clear any existing error on the login page
        const response = yield call(axios.get, '/api/shelf');
        yield put({type:'SET_ITEM', payload: response.data})
    }catch(error){
        console.log('error getting items', error);
    }
}
    
export default itemSaga;