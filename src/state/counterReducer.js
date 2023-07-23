import { createSlice } from '@reduxjs/toolkit';
const initialState = {

    phone : '',
    camera: false,
    openModal: false,
    profileImage:'',

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
      openModalPopup : (state,action) => {
         state.openModal = action.payload

      },
      updateProfileImage: (state,action) => {
          state.profileImage = action.payload
      },
        }
      })

    export const {
         addingPhoneNumber,
         triggerCamera,
         openModalPopup,
         updateProfileImage,
   } = counterSlice.actions;


  export default counterSlice.reducer;