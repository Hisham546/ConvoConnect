import { createSlice } from '@reduxjs/toolkit';
const initialState = {

 phone : '',
 camera: false,


}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

     addingPhoneNumber : (state,action) => {
        state.phone = action.payload
      },

      triggerCamera : (state,action) => {
       state.camera = action.payload

      },
        }
      })

        export const {
    addingPhoneNumber,
    triggerCamera,
} = counterSlice.actions;


  export default counterSlice.reducer;