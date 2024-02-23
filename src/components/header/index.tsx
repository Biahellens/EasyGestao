import React from 'react'
import { Content, NotificationsImg, NotificationsButton } from './style'
import notifications from '../../assets/notifications.svg'

function Header() {
  return (
    <Content>
      <NotificationsButton>
        <NotificationsImg src={notifications} />
      </NotificationsButton>
    </Content>
  )
}

export default Header
