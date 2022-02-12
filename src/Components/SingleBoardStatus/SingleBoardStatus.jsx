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
                    <div className='ticket' key={'d' + ticket.id}>
                        <div className="ticketSummary">{ticket.shortSummary}</div>
                        <div className="bottomTicketInfo">
                            <div className="bottomLeftTicketInfo">
                                <IssuetypeIcon issueType={ticket.issueType} key={'i' + ticket.id}/>
                                <PriorityIcon priority={ticket.issuePriority} key={'p' + ticket.id}/>
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