import { configureStore} from '@reduxjs/toolkit';
import chatReducer from './chatReducer';
import StoreUidReducer from '../components/login/userIdReducer';


const store = configureStore({
    reducer : {
        chatReducer: chatReducer,
        StoreUidReducer:StoreUidReducer,
    }
});

export default store;
