import React from 'react'
import { useSelector } from 'react-redux'
import SingleBoardStatus from '../SingleBoardStatus/SingleBoardStatus'
import './BoardStatus.scss'
let status = ["Backlog", "Selected For Development", "In Progress", "Done"]
const BoardStatus = () => {
    const tickets = useSelector( (state) => state.ticketsReducer.tickets)

    const getTheTicketsByStatus = (ticketStatus) => {
        let result = tickets.filter( (ticket) => {
            return ticket.status === ticketStatus
        })
        return result
    }
    return (
        <div className='statusBoards'>
            {
                status.map( (state) => {
                    return <SingleBoardStatus status={state} tickets={getTheTicketsByStatus(state)}/>
                })
            }
        </div>
        
    )
}

export default BoardStatus