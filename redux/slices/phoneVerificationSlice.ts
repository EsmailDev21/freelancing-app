// languageSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TextObject } from '../../types';


type PhoneVerificationState = {
    isLoading:boolean,
    error:TextObject | TextObject[]
    code:string,
    providedCode:string,
    isVerified:boolean
}
const initialState:PhoneVerificationState = {
  isLoading: false,
  error:null,
  code:"",
  providedCode:"",
  isVerified:false
  // Initialize with the value from local storage or default to 'en'
};

const phoneVerificationSlice = createSlice({
  name: 'phoneVerification',
  initialState,
  reducers: {
    setIsLoading: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload; // Update local storage
    },
    setError: (state, action:PayloadAction<TextObject | TextObject[]>) => {
        state.error = action.payload; // Update local storage
      },
    setProvidedCode:(state,action:PayloadAction<string>) => {
        state.providedCode=action.payload
    },
    //to change implementation later
    sendCode:(state,action:PayloadAction<string>) => {
        state.code=action.payload
        localStorage.setItem("code",action.payload)
    },
    compareCodes:(state) => {
        state.isVerified = state.providedCode == state.code
    },
  },
});

export const { setIsLoading,setError,setProvidedCode ,sendCode,compareCodes} = phoneVerificationSlice.actions;
export const selectIsLoading = state => state.phoneVerification.isLoading;
export const selectError = state => state.phoneVerification.error;
export const selectCode = state => state.phoneVerification.code;
export const selectProvidedCode = state => state.phoneVerification.providedCode;

export const selectIsVerified = state => state.phoneVerification.isVerified;
export default phoneVerificationSlice.reducer;
