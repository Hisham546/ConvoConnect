import { configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';


const store = configureStore({
    reducer : {
        counter: counterReducer,
    }
});

export default store;
