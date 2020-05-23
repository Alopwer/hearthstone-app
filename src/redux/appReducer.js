import api from '../api/ApiService';

const INITIALIZE_APP = 'hsapp/appReducer/INITIALIZE_APP';
const INITIALIZE_METADATA = 'hsapp/appReducer/INITIALIZE_METADATA';
const THROW_METADATA_ERROR = 'hsapp/appReducer/THROW_METADATA_ERROR';

const initialState = {
    isInitialized: false,
    metadata: null,
    metadataError: false,
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
                metadata: {...action.metadata}
            }
        case THROW_METADATA_ERROR:
            return {
                ...state,
                metadataError: true
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

const throwMetadataError = () => ({
    type: THROW_METADATA_ERROR
})

export const initialize = () => async (dispatch) => {
    await api.initialize()
    const metadata = await api.getMetadata()
    if (metadata.statusText == 'OK') {
        dispatch(initializeMetadata(metadata.data))
        dispatch(initializeApp())
    } else {
        dispatch(throwMetadataError())
    }
}

export default appReducer;