import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../Slice/UserSlice";



const Store = configureStore({
    reducer:{
        loginSlice:authSlice,
       
    },
    
});

export default Store;