import React from 'react'
import {
  UserContent,
  UserSidebar,
  TheFooter,
  TheHeader
} from './index'

const UserLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <UserSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <UserContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default UserLayout
