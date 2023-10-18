// languageSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TextObject } from '../../types';


type FormState = {
    isLoading:boolean,
    error:TextObject | TextObject[]
}
const initialState:FormState = {
  isLoading: false,
  error:null // Initialize with the value from local storage or default to 'en'
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setIsLoading: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload; // Update local storage
    },
    setError: (state, action:PayloadAction<TextObject | TextObject[]>) => {
        state.error = action.payload; // Update local storage
      },
  },
});

export const { setIsLoading,setError } = formSlice.actions;
export const selectIsLoading = state => state.form.isLoading;
export const selectError = state => state.form.error;
export default formSlice.reducer;
