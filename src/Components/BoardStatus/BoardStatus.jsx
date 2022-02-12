import React from 'react'
import { useSelector } from 'react-redux'
import SingleBoardStatus from '../SingleBoardStatus/SingleBoardStatus'
import Avatar from 'react-avatar';
import './BoardStatus.scss'

let status = ["Backlog", "Selected For Development", "In Progress", "Done"]
const BoardStatus = () => {
    const tickets = useSelector( (state) => state.ticketsReducer.tickets)
    const users = useSelector( (state) => state.usersReducer.users)

    const getTheTicketsByStatus = (ticketStatus) => {
        let result = tickets.filter( (ticket) => {
            return ticket.status === ticketStatus
        })
        return result
    }

    let remainingUsers = `${((users.length-1).toString())} +'`;
    
    return (
        <div className="kanbanBoard">
            <div className="boardActions">
                <div className="inputSearch"><input type="text"/><i className="fa fa-search"></i></div> 
                <div className="participants">

                    {
                        users.slice(0,5).map( (user) => {
                            return user.userIcon === "default" ? <Avatar className="userImage" name={user.userName} size="35"/> : <img className="userImage" src={user.userIcon} alt="userIcon"/>
                        })
                        
                    }
                    <Avatar className="userImage" name={remainingUsers} size="35"/> 
                </div>
                <button className='onlyMyIssues'>Only My Issues</button>
                <button className='recentlyUpdated'>Recently Updated</button>
            </div>
            
            <div className='statusBoards'>
                {
                    status.map( (state) => {
                        return <SingleBoardStatus status={state} tickets={getTheTicketsByStatus(state)} key={state}/>
                    })
                }
             </div>
        </div>
        
        
    )
}

export default BoardStatus