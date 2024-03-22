import { STORE_MESSAGES_FROM_FIREBASE } from "./constants";

const initialState = {

    storeMessages: '',

}

const StoreMessageReducer = (state = initialState, action) => {

    switch (action.type) {

        case STORE_MESSAGES_FROM_FIREBASE:

            return {
                ...state,
                storeMessages: action.payload

            };
        default:
            return state;

    }

};

export default StoreMessageReducer;