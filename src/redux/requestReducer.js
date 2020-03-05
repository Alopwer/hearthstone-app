import api from '../api/ApiService';
import { getCards, setTotalCards } from './cardsReducer';

const MAKE_REQUEST_DEFAULT = 'hsapp/requestReducer/MAKE_REQUEST_DEFAULT'
const TOGGLE_FETCHING = 'hsapp/requestReducer/TOGGLE_FETCHING';
const INCREASE_PAGE = 'hsapp/requestReducer/INCREASE_PAGE';
export const SET_ACTUAL_SET = 'hsapp/requestReducer/SET_ACTUAL_SET';

const initialState = {
    options: {
        locale: 'en_US',
        set: 'standard',
        class: '',
        manaCost: null,
        attack: null,
        health: null,
        collectible: 1,
        rarity: '',
        type: '',
        minionType: '',
        keyword: '',
        textFilter: '',
        gameMode: '',
        page: 0,
        pageSize: null,
        sort: '',
        order: '',
    },
    isFetching: false
}

const requestReducer = (state = initialState, action) => {
    switch(action.type) {
        case MAKE_REQUEST_DEFAULT:
            return {
                ...state,
                ...initialState.options
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case INCREASE_PAGE:
            return {
                ...state,
                options : { ...state.options, page: state.options.page + 1 }
            }
        case SET_ACTUAL_SET:
            return {
                ...state,
                options: { ...state.options, set: action.setName, page: 0 }
            }
        default:
            return state
    }
}

export const makeRequestDefault = () => ({
    type: MAKE_REQUEST_DEFAULT
})

const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const increasePage = () => ({
    type: INCREASE_PAGE
})

export const setActualSet = (setName) => ({
    type: SET_ACTUAL_SET,
    setName
})

export const requestCards = (requestOptions) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const data = await api.getCards(requestOptions)
    dispatch(setTotalCards(data.cardCount))
    dispatch(getCards(data.cards))
    dispatch(toggleFetching(false))
}

export default requestReducer;