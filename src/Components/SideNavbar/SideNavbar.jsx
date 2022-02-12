import React from 'react'
import { useSelector } from 'react-redux'
import SideNavbarOption from '../SideNavbarOption/SideNavbarOption'
import "./SideNavbar.scss"
const SideNavbar = () => {
const project = useSelector( (state) => state.projectsReducer.project)
const options = [
    {
        text: "Kanban Board",
        icon: "chalkboard"
    },
    {
        text: "Project settings",
        icon:"cog"
    },
    {
        text: "Releases",
        icon:"cart-plus"
    },
    {
        text: "Issues and filters",
        icon:"filter"
    },
    {
        text: "Pages",
        icon:"file"
    },
    {
        text: "Reports",
        icon:"chart-line"
    },
    {
        text: "Components",
        icon:"cube"
    },
]
  return (
    <section className='sideNavbar'>
        <div className="projectHeading">
            <img src={project.projectIcon} alt="project" className="projectImage" />
            <div className="projectTextInfo">
                <div className="projectName">{project.projectName}</div>
                <div className="projectCategory">{project.projectCategory}</div>
            </div>
        </div>

            {
                options.slice(0,2).map( (option) => {
                    return <SideNavbarOption option={option} key={option.text}/>
                })
            }
            <hr/>
            {
                options.slice(2).map( (option) => {
                    return <SideNavbarOption option={option} key={option.text}/>
                })
            }
        
    </section>
  )
}

export default SideNavbar