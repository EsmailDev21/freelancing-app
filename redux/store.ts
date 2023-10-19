// store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './LanguageSlice'; // Import the language slice
import formReducer from "./slices/FormSlice"
import phoneVerificationReducer from "./slices/phoneVerificationSlice"
const store = configureStore({
  reducer: {
    language: languageReducer,
    form:formReducer,
    phoneVerification:phoneVerificationReducer
    // Add the language reducer to your store
    // Add other reducers as needed
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
