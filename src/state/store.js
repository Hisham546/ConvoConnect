import { configureStore} from '@reduxjs/toolkit';
import chatReducer from './chatReducer';


const store = configureStore({
    reducer : {
        chatReducer: chatReducer,
    }
});

export default store;
