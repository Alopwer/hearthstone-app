import api from '../api/ApiService';

const TOGGLE_FETCHING = 'hsapp/cardReducer/TOGGLE_FETCHING'
const UPDATE_CARD = 'hsapp/cardReducer/UPDATE_CARD'

const initialState = {
    isFetching: false,
    cardInfo: null
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

export const getCard = (cardId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await api.getCard(cardId);
    dispatch(toggleFetching(false));
    dispatch(updateCard(data))
}

export default cardReducer;