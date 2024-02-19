import { STORE_USERID } from "../../state/constants";
// import { storeUid } from "../../state/actions";
const initialState = {

    userId: ''


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
    }
};

export default StoreUidReducer;