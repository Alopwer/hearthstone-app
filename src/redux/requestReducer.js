import api from '../api/ApiService';
import { appendCards, setTotalCards, updateCards } from './cardsReducer';

// const MAKE_REQUEST_DEFAULT = 'hsapp/requestReducer/MAKE_REQUEST_DEFAULT'
const TOGGLE_FETCHING = 'hsapp/requestReducer/TOGGLE_FETCHING';
const INCREASE_PAGE = 'hsapp/requestReducer/INCREASE_PAGE';
const RESET_PAGE = 'hsapp/requestReducer/RESET_PAGE';
const SET_ACTUAL_SET = 'hsapp/requestReducer/SET_ACTUAL_SET';
const SET_GAME_MODE = 'hsapp/requestReducer/SET_GAME_MODE';
const SET_CLASS = 'hsapp/requestReducer/SET_CLASS';
const SET_MANA_COST = 'hsapp/requestReducer/SET_MANA_COST';
const REMOVE_MANA_COST = 'hsapp/requestReducer/REMOVE_MANA_COST';
const RESET_MANA_COST = 'hsapp/requestReducer/RESET_MANA_COST';
const SET_TEXT_FILTER = 'hsapp/requestReducer/SET_TEXT_FILTER';

const initialState = {
    options: {
        locale: 'en_US',
        set: 'Standard',
        class: '',
        manaCost: [],
        attack: null,
        health: null,
        collectible: 1,
        rarity: '',
        type: '',
        minionType: '',
        keyword: '',
        textFilter: '',
        gameMode: '',
        pageSize: null,
        sort: '',
        order: ''
    },
    page: 1,
    isFetching: false
};

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        // case MAKE_REQUEST_DEFAULT:
        //     return {
        //         ...state,
        //         ...initialState.options
        //     }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case INCREASE_PAGE:
            return {
                ...state,
                page: state.page + 1
            };
        case SET_ACTUAL_SET:
            return {
                ...state,
                options: { ...state.options, set: action.setName, gameMode: '' }
            };
        case SET_GAME_MODE:
            return {
                ...state,
                options: { ...state.options, gameMode: action.gameMode, set: '' }
            };
        case SET_CLASS:
            return {
                ...state,
                options: { ...state.options, class: action.class }
            };
        case SET_MANA_COST:
            // const newManaCost = `${state.options.manaCost}${state.options.manaCost &&
            //     ','}${action.manaCost}`;
            return {
                ...state,
                options: {
                    ...state.options,
                    manaCost: [...state.options.manaCost, action.manaCost]
                }
            };
        case REMOVE_MANA_COST:
            // const remainedManaCost = state.options.manaCost
            //     .replace(action.manaCost, '')
            //     .slice(0, -1);
            const index = state.options.manaCost.indexOf(action.manaCost)
            return {
                ...state,
                options: {
                    ...state.options,
                    manaCost: [...state.options.manaCost.slice(0, index), ...state.options.manaCost.slice(index + 1)]
                }
            };
        case RESET_MANA_COST:
            return {
                ...state,
                options: {
                    ...state.options,
                    manaCost: ''
                }
            };
        case SET_TEXT_FILTER:
            return {
                ...state,
                options: {
                    ...state.options,
                    textFilter: action.textFilter
                }
            };
        case RESET_PAGE:
            return {
                ...state,
                page: 1
            };
        default:
            return state;
    }
};

// export const makeRequestDefault = () => ({
//     type: MAKE_REQUEST_DEFAULT
// })

const toggleFetching = isFetching => ({
    type: TOGGLE_FETCHING,
    isFetching
});

const resetPage = () => ({
    type: RESET_PAGE
});

const increasePage = () => ({
    type: INCREASE_PAGE
});

export const setActualSet = setName => ({
    type: SET_ACTUAL_SET,
    setName
});

export const setGameMode = gameMode => ({
    type: SET_GAME_MODE,
    gameMode
});

export const setClass = classValue => ({
    type: SET_CLASS,
    class: classValue
});

export const setManaCost = manaCost => ({
    type: SET_MANA_COST,
    manaCost
});

export const removeManaCost = manaCost => ({
    type: REMOVE_MANA_COST,
    manaCost
});

export const resetManaCost = () => ({
    type: RESET_MANA_COST
});

export const setTextFilter = textFilter => ({
    type: SET_TEXT_FILTER,
    textFilter
});

export const requestCards = (requestOptions, page, update) => async dispatch => {
    dispatch(toggleFetching(true));
    const data = await api.getCards(requestOptions, page);
    dispatch(toggleFetching(false));
    if (update) {
        dispatch(updateCards(data.cards));
        dispatch(resetPage());
    } else {
        dispatch(appendCards(data.cards));
    }
    dispatch(setTotalCards(data.cardCount));
    dispatch(increasePage());
};

export default requestReducer;
