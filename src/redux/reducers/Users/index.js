import * as usersType from '../../types/Users/index';
import * as paginationType from '../../types/Pagination/index';
import paginationReducer from '../Pagination/index';

const initialState = {
    users: [],
    filteredUsers: [],
    loading: false,
    error: null,
    pagination: {
        currentPage: 0,
        totalPage: 0,
        totalItens: 0,
        itensPerPage: 10
    }
}

export default function users(state = initialState, action) {
    switch(action.type) {
        case usersType.SET_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case usersType.SET_USERS_FILTERED_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case usersType.SET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
                filteredUsers: action.users
            }
        case usersType.SET_USERS_FILTERED_SUCCESS:
            return {
                ...state,
                loading: false,
                filteredUsers: action.users
            }
        case usersType.SET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case usersType.SET_USERS_PAGINATION_DATA:
            return {
                ...state,
                pagination: paginationReducer(state.pagination, {...action, type: paginationType.SET_PAGINATION_DATA})
            }
        case usersType.SET_USERS_PAGINATION_CURRENT_PAGE:
            return {
                ...state,
                pagination: paginationReducer(state.pagination, {...action, type: paginationType.SET_CURRENT_PAGE})
            }
        default:
            return state;
    }
}