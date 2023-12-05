import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getData = createAsyncThunk("getData", async () => {
//     const response = await fetch(`http://localhost:8081/`);
//     return response.json()
// })
export const getData = createAsyncThunk("student/getStudent", async () => {
    const response = await axios.get('http://localhost:8081/');
    return response.data;
});

const listSlice = createSlice({
    name: "list",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true;
        });
        
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
       
        builder.addCase(getData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }

});

export default listSlice.reducer;