import { STORE_USERID, STORE_USERNAME } from "../../state/constants";
// import { storeUid } from "../../state/actions";
const initialState = {

    userId: '',
    userName: ''

}

const StoreUidReducer = (state = initialState, action) => {

    switch (action.type) {
        case STORE_USERID:

            return {
                ...state,
                userId: action.payload,
            };


        default:
            return state;

        case STORE_USERNAME:

            return {
                ...state,
                userName: action.payload
            }
    }
};

export default StoreUidReducer;