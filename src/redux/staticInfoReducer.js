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
    filterableDataInfo: [
        {
            id: 0,
            name: ''
        }
    ]
}

const staticInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state
        }
    }
}

export default staticInfoReducer