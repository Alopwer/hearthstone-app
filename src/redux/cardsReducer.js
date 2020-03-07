const APPEND_CARDS = 'hsapp/cardsReducer/APPEND_CARDS';
const SET_TOTAL_CARDS = 'hsapp/cardsReducer/SET_TOTAL_CARDS';
const UPDATE_CARDS = 'hsapp/cardsReducer/UPDATE_CARDS';

const initialState = {
    cards: [],
    totalCards: null
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards : [...action.cards]
            }
        case APPEND_CARDS:
            return {
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        case SET_TOTAL_CARDS:
            return {
                ...state,
                totalCards: action.totalCards
            }
        default:
            return state
    }
}

export const updateCards = (cards) => ({
    type: UPDATE_CARDS,
    cards
})

export const appendCards = (cards) => ({
    type: APPEND_CARDS,
    cards
})

export const setTotalCards = (totalCards) => ({
    type: SET_TOTAL_CARDS,
    totalCards
})

export default cardsReducer;