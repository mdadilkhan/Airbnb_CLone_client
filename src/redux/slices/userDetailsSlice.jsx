import {createSlice} from '@reduxjs/toolkit';


const initialState={
    currentUser:null,
    error:false,
    loading:false,
}


const userDetailsSlice=createSlice({
    name: 'userDetails',
    initialState,
    reducers:{
        getUserDetialsStart:(state)=>{
          state.loading=true;
        },
        getUserDetialsSuccess:(state,action)=>{
            console.log(action.payload);

            state.currentUser=action.payload
            state.loading=false
            state.error=false
        },
        getUSerDetialsFailure:(state,action)=>{
            console.log(action.payload);
            state.loading=true
            state.error=action.payload
        },
    }
})

// these are action we are exporting to be used for dispatching action
export const {getUserDetialsStart,getUserDetialsSuccess,getUSerDetialsFailure}=userDetailsSlice.actions

// now we need to export the reducer to be user in the root reducer fo the store
export default userDetailsSlice.reducer;