import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import listReducer from "../features/counter/list";
import studentReducer from "../features/student/studentSlice"


export const store =  configureStore({
    reducer: {
        counter: counterReducer,
        list: listReducer,
        student: studentReducer,
    }
})