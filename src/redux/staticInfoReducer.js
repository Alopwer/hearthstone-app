const SET_ACTUAL_SET_NAME = 'hsapp/staticInfoReducer/SET_ACTUAL_SET_NAME'
const SET_CLASS_NAME = 'hsapp/staticInfoReducer/SET_CLASS_NAME'
const SET_TYPE_NAME = 'hsapp/staticInfoReducer/SET_TYPE_NAME'
const SET_RARITY_NAME = 'hsapp/staticInfoReducer/SET_RARITY_NAME'
const SET_MINION_TYPE_NAME = 'hsapp/staticInfoReducer/SET_MINION_TYPE_NAME'
const SET_KEYWORD_NAME = 'hsapp/staticInfoReducer/SET_KEYWORD_NAME'

const initialState = {
    orderAndSort: [
        {
            id: 0,
            value: 'manaCost,asc',
            name: 'Mana: low to high'
        },
        {
            id: 1,
            value: 'manaCost,desc',
            name: 'Mana: high to low'
        },
        {
            id: 2,
            value: 'name,asc',
            name: 'Card Name: A to Z'
        },
        {
            id: 3,
            value: 'name,desc',
            name: 'Card Name: Z to A'
        },
        {
            id: 4,
            value: 'attack,asc',
            name: 'Attack: low to high'
        },
        {
            id: 5,
            value: 'attack,desc',
            name: 'Attack: high to low'
        },
        {
            id: 6,
            value: 'health,asc',
            name: 'Health: low to high'
        },
        {
            id: 7,
            value: 'health,desc',
            name: 'Health: high to low'
        }
    ],
    nameList: {
        actualSetName: 'Standard',
        className: '',
        typeName: '',
        rarityName: '',
        minionTypeName: '',
        keywordName: ''
    }
}

const staticInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ACTUAL_SET_NAME:
            return {
                ...state,
                nameList: {...state.nameList, actualSetName: action.setName}
            }
        case SET_CLASS_NAME:
            return {
                ...state,
                nameList: {...state.nameList, className: action.className}

            }
        case SET_TYPE_NAME:
            return {
                ...state,
                nameList: {...state.nameList, typeName: action.typeName}
            }
        case SET_RARITY_NAME:
            return {
                ...state,
                nameList: {...state.nameList, rarityName: action.rarityName}
            }
        case SET_MINION_TYPE_NAME:
            return {
                ...state,
                nameList: {...state.nameList, minionTypeName: action.minionTypeName}
            }
        case SET_KEYWORD_NAME:
            return {
                ...state,
                nameList: {...state.nameList, keywordName: action.keywordName}
            }
        default: {
            return state
        }
    }
}

export const setActualSetName = setName => ({
    type: SET_ACTUAL_SET_NAME,
    setName
})

export const setClassName = className => ({
    type: SET_CLASS_NAME,
    className
})

export const setTypeName = typeName => ({
    type: SET_TYPE_NAME,
    typeName
})

export const setRarityName = rarityName => ({
    type: SET_RARITY_NAME,
    rarityName
})

export const setMinionTypeName = minionTypeName => ({
    type: SET_MINION_TYPE_NAME,
    minionTypeName
})

export const setKeywordName = keywordName => ({
    type: SET_KEYWORD_NAME,
    keywordName
})

export default staticInfoReducer