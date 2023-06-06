import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Auth',
    initialState: { isLogged: false, user: {}, selectedChats: {}, chats: {} },
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
            const { fullChat } = actions.payload;
            state.selectedChats = fullChat;
        },
        setChats(state, actions) {
            state.chats = actions.payload.data;
        },
    },
});

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
});
