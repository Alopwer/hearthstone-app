const TOGGLE_ADDITIONAL_FILTERBARS = 'hsapp/uiReducer/TOGGLE_ADDITIONAL_FILTERBARS';

const initialState = {
    additionalFilterbars: false
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADDITIONAL_FILTERBARS:
            return {
                ...state,
                additionalFilterbars: !state.additionalFilterbars
            };
        default :
            return state
    }
}

export const toggleAdditionalFilterbars = () => ({
    type: TOGGLE_ADDITIONAL_FILTERBARS
});

export default uiReducer;