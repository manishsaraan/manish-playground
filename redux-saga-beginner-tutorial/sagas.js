import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync() {
    yield delay(1000);
    yield put({type: 'INCREMENT'});
}
export function* watchIncrementAsync(params) {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}