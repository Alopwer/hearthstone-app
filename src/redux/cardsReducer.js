import { SET_ACTUAL_SET } from './requestReducer';

const GET_CARDS = 'hsapp/cardsReducer/GET_CARDS';
const SET_TOTAL_CARDS = 'hsapp/cardsReducer/SET_TOTAL_CARDS';
const RESET_CARDS = 'hsapp/cardsReducer/RESET_CARDS';

const initialState = {
    cards: [],
    totalCards: null,
    isFetching: false
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        case SET_TOTAL_CARDS:
            return {
                ...state,
                totalCards: action.totalCards
            }
        case RESET_CARDS:
            return {
                ...state,
                cards : []
            }
        case SET_ACTUAL_SET:
            return {
                ...state,
                cards : []
            }
        default:
            return state
    }
}

export const getCards = (cards) => ({
    type: GET_CARDS,
    cards
})

export const setTotalCards = (totalCards) => ({
    type: SET_TOTAL_CARDS,
    totalCards
})

export const resetCards = () => ({
    type: RESET_CARDS
})

export default cardsReducer;