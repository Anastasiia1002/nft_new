import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    userId: null,
    nickName: null,
    token: null,
    email: null,
    stateChange: false,
    
    }


export const authSlice = createSlice({
name: "auth",
initialState,
reducers:{
updateUserProfile(state, {payload}){
   
    state.userId= payload.userId;
    state.nickName= payload.nickName;
    state.email= payload.email;
},
authStateChange(state, {payload}){
    state.userId= payload.userId;
    state.nickName= payload.nickName;
    state.email= payload.email;
    state.stateChange=  payload.stateChange;
},
authSignOut(state) {
    state.userId= null;
    state.nickName= null;
    state.token= null;
    state.email= null;
    state.stateChange= false;
}
}})
console.log(authSlice.state)

export const {updateUserProfile,authStateChange,authSignOut}=authSlice.actions;
// export default authSlice.reducers;