import api from '../api/ApiService';

const TOGGLE_FETCHING = 'hsapp/cardReducer/TOGGLE_FETCHING'
const UPDATE_CARD = 'hsapp/cardReducer/UPDATE_CARD'
const RESET_CARD = 'hsapp/cardReducer/RESET_CARD'
const SET_RELATIVE_CARDS_IDS = 'hsapp/cardReducer/SET_RELATIVE_CARDS_IDS'
const APPEND_RELATIVE_CARDS = 'hsapp/cardReducer/APPEND_RELATIVE_CARDS'

const initialState = {
    isFetching: false,
    cardInfo: null,
    relativeCards: [],
    relativeCardsIds: null,
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARD:
            return {
                ...state,
                cardInfo: {...action.cardInfo}
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case RESET_CARD:
            return {
                ...state,
                cardInfo: null
            }
        case SET_RELATIVE_CARDS_IDS:
            return {
                ...state,
                relativeCardsIds: [action.ids[0], action.ids[1]]
            }
        case APPEND_RELATIVE_CARDS:
            return {
                ...state,
                relativeCards: [...state.relativeCards, action.cardInfo]
            }
        default:
            return state
    }
}

const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

const appendRelativeCards = (cardInfo) => ({
    type: APPEND_RELATIVE_CARDS,
    cardInfo
})

const updateCard = (cardInfo) => ({
    type: UPDATE_CARD,
    cardInfo
})

export const setRelativeCardsIds = (ids) => ({
    type: SET_RELATIVE_CARDS_IDS,
    ids
})

export const resetCard = () => ({
    type: RESET_CARD
})

export const getCard = (cardId) => async (dispatch, getState) => {
    const relativeCards = getState().cardReducer.relativeCards
    const foundCard = relativeCards.find(c => +c.id === +cardId)
    if (foundCard) {
        dispatch(updateCard(foundCard))
    } else {
        dispatch(toggleFetching(true));
        const data = await api.getCard(cardId);
        dispatch(toggleFetching(false));
        dispatch(updateCard(data))
        if (!relativeCards.includes(data)) {
            dispatch(appendRelativeCards(data))
        }
    }
}

export default cardReducer;