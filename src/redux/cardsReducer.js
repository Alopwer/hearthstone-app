import api from '../api/ApiService';

const GET_CARDS = 'GET_CARDS';
const INCREMENT_PAGE = 'INCREMENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    cards: [],
    page: 1,
    isFetching: false
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        case INCREMENT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

const incrementPage = () => ({
    type: INCREMENT_PAGE
})

const getCards = (cards) => ({
    type: GET_CARDS,
    cards
})

const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const requestCards = (page) => async (dispatch) => {
    const cards = await api.getCards(page)
    debugger
    dispatch(toggleFetching(true))
    dispatch(getCards(cards))
    dispatch(toggleFetching(false))
    dispatch(incrementPage())
}

export default cardsReducer;