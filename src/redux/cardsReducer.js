const APPEND_CARDS = 'hsapp/cardsReducer/APPEND_CARDS';
const SET_TOTAL_CARDS = 'hsapp/cardsReducer/SET_TOTAL_CARDS';
const UPDATE_CARDS = 'hsapp/cardsReducer/UPDATE_CARDS';
const THROW_CARDS_ERROR = 'hsapp/cardsReducer/THROW_CARDS_ERROR';

const initialState = {
    cards: [],
    totalCards: null,
    cardsInitialized: false,
    cardsError: false
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards : [...action.cards],
                cardsInitialized: true
            }
        case APPEND_CARDS:
            return {
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        case SET_TOTAL_CARDS:
            return {
                ...state,
                totalCards: action.totalCards || '0'
            }
        case THROW_CARDS_ERROR:
            return {
                ...state,
                cardsError: true
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

export const throwCardsError = () => ({
    type: THROW_CARDS_ERROR
})

export default cardsReducer;