import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleDarkMode: (state, actions) => {
            return {
                ...state,
                darkMode: actions.payload,
            };
        },
    },
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;