import React from 'react'
import './SideNavbarOption.scss'
const SideNavbarOption = ({option}) => {
  return (
    <div className='sidebarOption'>
        <i className={'fal fa-'+option.icon}></i>
        <div className="sidebarOptionText">{option.text}</div>
    </div>
  )
}

export default SideNavbarOption