import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Auth',
    initialState: { isLogged: false, user: {}, selectedChats: [], chats: [] },
    reducers: {
        login(state) {
            state.isLogged = true;
        },
        logout(state) {
            state.isLogged = false;
        },
        setUser(state) {
            const data = JSON.parse(localStorage.getItem('userData'));
            state.user = data;
        },
        setSelectedChats(state, actions) {
            const data = actions.payload;
            state.selectedChats = data;
        },
        setChats(state, actions) {
            const data = actions.payload
            state.chats = data;
        },
    },
});

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
});
