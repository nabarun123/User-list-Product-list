import { configureStore } from "@reduxjs/toolkit";
//in redux we have "createStore" & "combineReducer"
import userReducer from "../features/userSlice";
//"userReducer": because we have given the name as "user" in the slice
import productReducer from "../features/productSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    // login: loginReducer,
  },
});
