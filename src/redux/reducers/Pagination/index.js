import * as paginationType from '../../types/Pagination/index';

export const initialState = {
    currentPage: 0,
    totalPage: 0,
    totalItens: 0,
    itensPerPage: 10
}

export default function pagination(state = initialState, action) {
    switch(action.type) {
        case paginationType.SET_PAGINATION_DATA:
            return {
                ...state,
                currentPage: 1,
                totalPage: Math.ceil(action.totalItens / state.itensPerPage),
                totalItens: action.totalItens
            }
        case paginationType.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}