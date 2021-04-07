const initialState = {
    user: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'GET_DATA':
        return {
            ...state,
            data: action.payload,
        };
    default:
        return state;
    }
};

export default dataReducer;
