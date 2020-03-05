import api from '../api/ApiService';

const INITIALIZE_APP = 'hsapp/appReducer/INITIALIZE_APP';
const INITIALIZE_METADATA = 'hsapp/appReducer/INITIALIZE_METADATA';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                isInitialized : true
            }
        case INITIALIZE_METADATA:
            return {
                ...state,
                ...action.metadata
            }
        default:
            return state
    }
}

const initializeApp = () => ({
    type: INITIALIZE_APP
})

const initializeMetadata = (metadata) => ({
    type: INITIALIZE_METADATA,
    metadata
})

export const initialize = () => async (dispatch) => {
    await api.initialize()
    const metadata = await api.getMetadata()
    dispatch(initializeMetadata(metadata))
    dispatch(initializeApp())
}

export default appReducer;