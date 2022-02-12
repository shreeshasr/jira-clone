import React from 'react'
import './PriorityIcon.scss'
import Blocker from "../../images/blocker.png"
import Critical from "../../images/critical.png"
import Highest from "../../images/highest.png"
import High from "../../images/high.png"
import Medium from "../../images/medium.png"
import Low from "../../images/low.png"
import Lowest from "../../images/lowest.png"
import Major from "../../images/major.png"
import Minor from "../../images/minor.png"

const PriorityIcon = ({priority}) => {
let icon;

const getTheIcon =  () => {
switch(priority){
    case "Blocker"  : icon = Blocker
        break;
    case "Critical" : icon = Critical
        break;
    case "Highest" : icon = Highest
        break;
    case "High": icon = High
        break;
    case "Medium": icon = Medium
        break;
    case "Low": icon = Low
        break;
    case "Lowest": icon = Lowest
        break;
    case "Major": icon = Major
        break;
    case "Minor": icon = Minor
        break;
    default : icon = Major
}
}
getTheIcon();

  return (
    <img src={icon} className='priority' alt="priority"/>
  )
}

export default PriorityIcon