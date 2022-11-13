import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const previousDataSlice = createSlice({
    name: "previousData",
    initialState,
    reducer: {
        add: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const { add } = previousDataSlice.actions

export const selectPreviousData = (state) => state.previousData.value

export default previousDataSlice.reducer