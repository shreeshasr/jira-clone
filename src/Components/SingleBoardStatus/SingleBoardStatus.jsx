import React from 'react'
import IssuetypeIcon from '../IssuetypeIcon/IssuetypeIcon'
import PriorityIcon from '../PriorityIcon/PriorityIcon'
import './SingleBoardStatus.scss'
import trump from '../../images/trump.jpeg'
const SingleBoardStatus = ({status, tickets}) => {
  return (
    <div className='singleBoardStatus'>
        <div className='status'>{status}</div>
        {
            tickets.map( (ticket) => {
                return(
                    <div className='ticket'>
                        <div className="ticketSummary">{ticket.shortSummary}</div>
                        <div className="bottomTicketInfo">
                            <div className="bottomLeftTicketInfo">
                                <IssuetypeIcon issueType={ticket.issueType}/>
                                <PriorityIcon priority={ticket.issuePriority}/>
                                <div className="ticketPoints">{ticket.points}</div>
                            </div>
                            <div className="bottomRightTicketInfo">
                                <img className="ticketImage" src={trump} alt="user"/>
                                <div className="ticketId">{ticket.id}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SingleBoardStatus