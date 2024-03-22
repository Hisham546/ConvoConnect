import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatReducer';
import StoreUidReducer from '../components/login/userIdReducer';
import StoreMessageReducer from './storeMessageReducer';


const store = configureStore({
    reducer: {
        chatReducer: chatReducer,
        StoreUidReducer: StoreUidReducer,
        StoreMessageReducer: StoreMessageReducer,
    }
});

export default store;
