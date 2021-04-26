import { call, put, takeEvery } from 'redux-saga/effects';
import * as usersType from '../../types/Users/index';
import usersData from '../../../data/usuarios.json';


function getJsonUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersData.results);
        }, 2000);
    })
}

function* fetchUsers() {
    try {
        const users = yield call(getJsonUsers);

        yield put({ type: usersType.SET_USERS_SUCCESS, users: users });
        yield put({ type: usersType.SET_USERS_PAGINATION_DATA, totalItens: users.length });
    } catch (e) {
        yield put({ type: usersType.SET_USERS_FAILED, message: e.message });
    }
}

function* fetchUsersFiltered(action) {
    try {
        yield put({ type: usersType.SET_USERS_FILTERED_SUCCESS, users: action.users });
        yield put({ type: usersType.SET_USERS_PAGINATION_DATA, totalItens: action.users.length });
    } catch (e) {
        yield put({ type: usersType.SET_USERS_FAILED, message: e.message });
    }
}

export function* userSaga() {
    yield takeEvery('SET_USERS_REQUESTED', fetchUsers);
}

export function* usersFilteredSaga() {
    yield takeEvery('SET_USERS_FILTERED_REQUESTED', fetchUsersFiltered);
}