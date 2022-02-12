import React from 'react'
import './IssuetypeIcon.scss'
import bug from "../../images/bug.png"
import task from "../../images/task.png"
import epic from "../../images/epic.png"
import story from "../../images/story.png"
const IssuetypeIcon = ({issueType}) => {
let icon;


const getTheIcon =  () => {
    switch(issueType){
        case "Bug"  : icon = bug
            break;
        case "Task" : icon = task
            break;
        case "Epic" : icon = epic
            break;
        case "Story": icon = story
            break;
        default : icon = story
    }
}
getTheIcon();

  return (
    <img src={icon} className='issueType' alt="issueType"/>
  )
}

export default IssuetypeIcon