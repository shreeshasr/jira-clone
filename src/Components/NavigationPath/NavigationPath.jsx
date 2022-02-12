import React from 'react'
import { useSelector } from 'react-redux'
import './NavigationPath.scss'

const NavigationPath = ({option}) => {
const project = useSelector( (state) => state.projectsReducer.project)
  return (
    <div className='navigationPath'>
        <div className="path">{'Projects / ' + project.projectName + ' / ' + option}</div>
        <div className="sectionName">{option}</div>
    </div>
  )
}

export default NavigationPath