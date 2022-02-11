import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./TicketsSlice"
export const store = configureStore( {
    reducer: {
        ticketsReducer:ticketsReducer
    }
})