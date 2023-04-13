import { createSlice } from '@reduxjs/toolkit'

const initialUserData = {
    logedIn: null,
    balance: null,
    status: null,
    userId: null,
}

const userData = createSlice({
    name: 'user',
    initialState: initialUserData,
    reducers: {
        changeLogedIn(state, action) {
            state.logedIn = action.payload
        },
        changeBalance(state, action) {
            state.balance = action.payload
        },
        changeStatus(state, action) {
            state.status = action.payload
        },
        changeUserId(state, action) {
            state.userId = action.payload
        }
    }
})

export const userAction = userData.actions;

export default userData.reducer;
