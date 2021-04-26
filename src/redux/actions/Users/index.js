import * as usersType from '../../types/Users/index';

export function setUsers() {
    return {
        type: usersType.SET_USERS_REQUESTED
    }
}

export function setUsersFiltered(usersFilterd) {
    return {
        type: usersType.SET_USERS_FILTERED_REQUESTED,
        users: usersFilterd
    }
}

export function setUsersPaginationCurrentPage(currentPage) {
    return {
        type: usersType.SET_USERS_PAGINATION_CURRENT_PAGE,
        currentPage: currentPage
    }
}