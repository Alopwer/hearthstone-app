import api from '../api/ApiService';

const INITIALIZE = 'INITIALIZE';

const initialState = {
    token: ''
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE:
            return {
                ...state,
                token : action.token
            }
        default:
            return state
    }
}

const initializeApp = (token) => ({
    type: INITIALIZE,
    token
})

export const initialize = () => async (dispatch) => {
    const response = await api.initialize()
    dispatch(initializeApp(response.access_token))
}

export default appReducer;