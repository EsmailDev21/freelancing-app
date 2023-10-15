// store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './LanguageSlice'; // Import the language slice

const store = configureStore({
  reducer: {
    language: languageReducer, // Add the language reducer to your store
    // Add other reducers as needed
  },
});

export default store;
