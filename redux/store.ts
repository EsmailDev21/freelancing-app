// store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './LanguageSlice'; // Import the language slice
import formReducer from "./slices/FormSlice"
const store = configureStore({
  reducer: {
    language: languageReducer,
    form:formReducer
    // Add the language reducer to your store
    // Add other reducers as needed
  },
});

export default store;
