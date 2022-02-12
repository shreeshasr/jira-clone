import React from 'react'
import NavigationPath from '../NavigationPath/NavigationPath';
import './MainBody.scss'
const MainBody = ({Component, option}) => {

  return (
    <div className='mainBody'>
        <NavigationPath option={option}/>
       {Component}
    </div>
  )
}

export default MainBody