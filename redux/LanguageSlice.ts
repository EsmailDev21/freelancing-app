// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('language') || 'en', // Initialize with the value from local storage or default to 'en'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload); // Update local storage
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = state => state.language.language;
export default languageSlice.reducer;
