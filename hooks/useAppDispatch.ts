// Import necessary modules and types
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { AppDispatch, RootState } from '../redux/store';

// Define the useAppSelector function, a typed selector hook for accessing the Redux store state
const useAppDispatch:() => AppDispatch= useDispatch;

export default useAppDispatch;