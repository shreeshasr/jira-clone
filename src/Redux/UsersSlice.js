import { createSlice } from "@reduxjs/toolkit";
import trump from "../images/trump.jpeg"

const initialState = {
    users:[
        {
            id: "123",
            userName: "Shreesha SR",
            userIcon: trump,
         },
        {
            id: "456",
            userName: "Nishan B",
            userIcon: "default",
        },
        {
            id: "789",
            userName: "Bhanu P",
            userIcon: "default",
        },
        {
            id: "2424",
            userName: "Random Kumar",
            userIcon: "default",
        },
        {
            id: "784549",
            userName: "Joseph Raj",
            userIcon: "default",
        },
        {
            id: "746789",
            userName: "Newton Babu",
            userIcon: "default",
        },
    ]
}

const UsersSlice = createSlice( {
    initialState,
    name: "users",
    reducers: {
        changeUserName : (state, action) => {
            state.users.find( (user) => {
                return user.id === action.payload.userId
            }).userName = action.payload.userName
        },
    },
})


export const {changeUserName} = UsersSlice.actions

export default UsersSlice.reducer