import api from '../api/ApiService';

const TOGGLE_FETCHING = 'hsapp/cardReducer/TOGGLE_FETCHING'
const TOGGLE_ACTIVE_CARD = 'hsapp/cardReducer/TOGGLE_ACTIVE_CARD'
const UPDATE_CARD = 'hsapp/cardReducer/UPDATE_CARD'
const RESET_CARD = 'hsapp/cardReducer/RESET_CARD'
const SET_RELATIVE_CARDS_IDS = 'hsapp/cardReducer/SET_RELATIVE_CARDS_IDS'
const APPEND_VISITED_CARDS = 'hsapp/cardReducer/APPEND_VISITED_CARDS'

const initialState = {
    isFetching: false,
    cardActive: false,
    cardInfo: null,
    visitedCards: [],
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
        case TOGGLE_ACTIVE_CARD:
            return {
                ...state,
                cardActive: action.isActive
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
        case APPEND_VISITED_CARDS:
            return {
                ...state,
                visitedCards: [...state.visitedCards, action.cardInfo]
            }
        default:
            return state
    }
}

const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const toggleActiveCard = (isActive) => ({
    type: TOGGLE_ACTIVE_CARD,
    isActive
})

const appendVisitedCards = (cardInfo) => ({
    type: APPEND_VISITED_CARDS,
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
    const visitedCards = getState().cardReducer.visitedCards
    const foundCard = visitedCards.find(c => +c.id === +cardId)
    if (foundCard) {
        dispatch(updateCard(foundCard))
    } else {
        dispatch(toggleFetching(true));
        const data = await api.getCard(cardId);
        dispatch(toggleFetching(false));
        dispatch(updateCard(data))
        if (!visitedCards.includes(data)) {
            dispatch(appendVisitedCards(data))
        }
    }
}

export const resetCardTA = () => async (dispatch) => {
    dispatch(toggleActiveCard(false))
    dispatch(resetCard())
}

export default cardReducer;