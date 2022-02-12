import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./TicketsSlice"
import projectsReducer from "./ProjectsSlice"
import usersReducer from "./UsersSlice"
export const store = configureStore( {
    reducer: {
        ticketsReducer:ticketsReducer,
        projectsReducer:projectsReducer,
        usersReducer:usersReducer,
    }
})