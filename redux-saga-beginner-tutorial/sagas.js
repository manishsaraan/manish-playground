import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({type: 'INCREMENT'});
}
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function *decrementAsync() {
    yield delay(1000);
    yield put({ type: 'DECREMENT'});
}
export function *watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync(),
    ])
}