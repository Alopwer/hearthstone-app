import api from '../api/ApiService';
import { appendCards, setTotalCards, updateCards } from './cardsReducer';

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
const SET_ATTACK = 'hsapp/requestReducer/SET_ATTACK';
const SET_HEALTH = 'hsapp/requestReducer/SET_HEALTH';
const SET_CARD_TYPE = 'hsapp/requestReducer/SET_CARD_TYPE';
const SET_RARITY = 'hsapp/requestReducer/SET_RARITY';
const SET_MINION_TYPE = 'hsapp/requestReducer/SET_MINION_TYPE';
const SET_KEYWORD = 'hsapp/requestReducer/SET_KEYWORD';
const SET_ORDER_AND_SORT = 'hsapp/requestReducer/SET_ORDER_AND_SORT';
const RESET_FILTERS = 'hsapp/requestReducer/RESET_FILTERS';
const SET_VIEW_MODE = 'hsapp/requestReducer/SET_VIEW_MODE';

const initialState = {
    options: {
        locale: 'en_US',
        set: 'Standard',
        class: '',
        manaCost: [],
        attack: '',
        health: '',
        collectible: 1,
        rarity: '',
        type: '',
        minionType: '',
        keyword: '',
        textFilter: '',
        gameMode: '',
        pageSize: null,
        sort: 'manaCost',
        order: '',
        viewMode: ''
    },
    page: 1,
    isFetching: false
};

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
                ...state,
                options: {
                    ...state.options,
                    manaCost: [...state.options.manaCost, action.manaCost]
                }
            };
        case REMOVE_MANA_COST:
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
                    manaCost: []
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
        case SET_ATTACK:
            return {
                ...state,
                options: {
                    ...state.options,
                    attack: action.attack
                }
            }
        case SET_HEALTH:
            return {
                ...state,
                options: {
                    ...state.options,
                    health: action.health
                }
            }
        case SET_CARD_TYPE:
            return {
                ...state,
                options: {
                    ...state.options,
                    type: action.cardType
                }
            }
        case SET_RARITY:
            return {
                ...state,
                options: {
                    ...state.options,
                    rarity: action.rarity
                }
            }
        case SET_MINION_TYPE:
            return {
                ...state,
                options: {
                    ...state.options,
                    minionType: action.minionType
                }
            }
        case SET_KEYWORD:
            return {
                ...state,
                options: {
                    ...state.options,
                    keyword: action.keyword
                }
            }
        case SET_ORDER_AND_SORT:
            return {
                ...state,
                options: {
                    ...state.options,
                    sort: action.payload[0],
                    order: action.payload[1]
                }
            }
        case SET_VIEW_MODE:
            return {
                ...state,
                options: {
                    ...state.options,
                    viewMode: action.viewMode
                }
            }
        case RESET_FILTERS:
            return {
                ...state,
                options: {
                    ...state.options,
                    class: '',
                    manaCost: [],
                    textFilter: '',
                    attack: '',
                    health: '',
                    type: '',
                    rarity: '',
                    minionType: '',
                    keyword: ''
                }
            }
        case RESET_PAGE:
            return {
                ...state,
                page: 1
            };
        default:
            return state;
    }
};

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

export const setAttack = attack => ({
    type: SET_ATTACK,
    attack
})

export const setHealth = health => ({
    type: SET_HEALTH,
    health
})

export const setCardType = cardType => ({
    type: SET_CARD_TYPE,
    cardType
})

export const setRarity = rarity => ({
    type: SET_RARITY,
    rarity
})

export const setMinionType = minionType => ({
    type: SET_MINION_TYPE,
    minionType
})

export const setKeyword = keyword => ({
    type: SET_KEYWORD,
    keyword
})

export const setOrderAndSort = payload => ({
    type: SET_ORDER_AND_SORT,
    payload
})

export const setViewMode = viewMode => ({
    type: SET_VIEW_MODE,
    viewMode
})

export const resetFilters = () => ({
    type: RESET_FILTERS
})

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
