import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStudent } from "../../services/api";

export const createStudentAsync = createAsyncThunk('student/createStudent', async (studentData) => {
    try {
        const response = await createStudent(studentData);
        return response
    } catch (error) {
        throw error;
    }
});

 const studentSlice = createSlice({
    name: 'student',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createStudentAsync.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        })
        .addCase(createStudentAsync.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        .addCase(createStudentAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

    },
});

export default studentSlice.reducer