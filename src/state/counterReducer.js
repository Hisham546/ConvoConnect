import { createSlice } from '@reduxjs/toolkit';
const initialState = {

 phone : '',


}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

     addingPhoneNumber : (state,action) => {
        state.phone = action.payload
      },
        }
      })

        export const {
    addingPhoneNumber,
} = counterSlice.actions;


  export default counterSlice.reducer;