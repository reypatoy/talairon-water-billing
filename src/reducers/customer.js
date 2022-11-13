export const customerState = {
    isLogin: false,
    user: null,
    error: null,
    loading: false,
    };



const customerReducer = (state = customerState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            console.log(action.payload);
            state = {
                ...state,
                isLogin: true,
                customer: action.payload.newcustomer,
            };
            return state;

        case 'LOGOUT_CUSTOMER':
            state = {
                ...state,
                isLogin: false,
                customer: null,
                error: null,
                loading: false,
            };
            return state;
        default:
            return state;
    }
};

export default customerReducer;