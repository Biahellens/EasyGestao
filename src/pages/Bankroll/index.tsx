import React from 'react'
import { Content, Main, Title, TitleContent, Img } from './style'

import { NavBar, Header } from '../../components'

import toBack from '../../assets/toBack.svg'
import manage_accounts from '../../assets/manage_accounts.svg'

function Bankroll() {
  return (
    <Main>
      <NavBar />
      <Content>
        <Header />
        <TitleContent>
          <Img src={toBack} $size />
          <Img src={manage_accounts} />
          <Title>Gerir suas bancas</Title>
        </TitleContent>
      </Content>
    </Main>
  )
}

export default Bankroll
