import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
    },
    reducers: { 
        login: (state, action) => {
            
        },
        logout: (state, payload) => {
            
        },
        checkingCredentials: (state, action) => {
            
        }

    }
    });
//Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;