import { takeEvery, takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  //yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeEvery('INCREMENT', onIncrement);
}
// takeLatest will trigger only one increment, if changed with takeEvery;