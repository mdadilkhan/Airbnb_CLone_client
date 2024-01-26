import {createSlice} from '@reduxjs/toolkit';


const initialState={
    currentUser:null,
    error:false,
    loading:false,
    isOpen:false
}


const userLoginSlice=createSlice({
    name: 'userLogin',
    initialState,
    reducers:{
        loginStart:(state)=>{
          state.loading=true;
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=false
        },
        loginFailure:(state,action)=>{
            state.loading=true
            state.error=action.payload
        },
        onOpenLogin:(state)=>{
            state.isOpen=true
        },
        onCloseLogin:(state)=>{
            state.isOpen=false
        }
    }
})

// these are action we are exporting to be used for dispatching action
export const {loginStart,loginSuccess,loginFailure,onOpenLogin,onCloseLogin}=userLoginSlice.actions

// now we need to export the reducer to be user in the root reducer fo the store
export default userLoginSlice.reducer;