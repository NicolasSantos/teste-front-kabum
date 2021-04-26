import { all, fork } from 'redux-saga/effects';
import { userSaga, usersFilteredSaga } from './userSaga/index';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(usersFilteredSaga)
    ])
}