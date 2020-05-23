import api from '../api/ApiService';

const TOGGLE_FETCHING = 'hsapp/cardReducer/TOGGLE_FETCHING'
const UPDATE_CARD = 'hsapp/cardReducer/UPDATE_CARD'
const RESET_CARD = 'hsapp/cardReducer/RESET_CARD'
const SET_RELATIVE_CARDS_IDS = 'hsapp/cardReducer/SET_RELATIVE_CARDS_IDS'
const TOGGLE_ACTIVE_CARD = 'hsapp/cardReducer/TOGGLE_ACTIVE_CARD'
const THROW_CARD_ERROR = 'hsapp/cardReducer/THROW_CARD_ERROR'

const initialState = {
    isFetching: false,
    cardInfo: null,
    id: '',
    relativeCardsIds: null,
    activeCard: false,
    cardError: false
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CARD:
            return {
                ...state,
                cardInfo: { ...action.cardInfo },
                id: action.cardInfo.id,
                activeCard: true
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case RESET_CARD:
            return {
                ...state,
                cardInfo: null,
                activeCard: false
            }
        case SET_RELATIVE_CARDS_IDS:
            return {
                ...state,
                relativeCardsIds: [action.ids[0], action.ids[1]]
            }
        case TOGGLE_ACTIVE_CARD:
            return {
                ...state,
                activeCard: action.payload
            }
        case THROW_CARD_ERROR:
            return {
                ...state,
                cardError: true
            }
        default:
            return state
    }
}

const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
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

export const throwCardError = () => ({
    type: THROW_CARD_ERROR
})

export const toggleActiveCard = (active) => ({
    type: TOGGLE_ACTIVE_CARD,
    payload: active
})

export const getCard = (cardId) => async (dispatch, getState) => {
    dispatch(toggleFetching(true));
    const res = await api.getCard(cardId);
    if (res.statusText == 'OK') {
        dispatch(toggleFetching(false));
        dispatch(updateCard(res.data));
    } else {
        dispatch(throwCardError())
    }
}

export default cardReducer;