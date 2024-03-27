import { STORE_USERID, STORE_USERDATA } from "../../state/constants";
// import { storeUid } from "../../state/actions";
const initialState = {

    userId: '',
    userData: null,
   

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

        case STORE_USERDATA:

            return {
                ...state,
                userData: action.payload
            }
    }
};

export default StoreUidReducer;