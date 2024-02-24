import React from 'react'
import {
  Content,
  Main,
  Title,
  TitleContent,
  Img,
  GridContent,
  Items,
} from './style'

import { NavBar, Header, CardBankRoll } from '../../components'

import toBack from '../../assets/toBack.svg'
import manage_accounts from '../../assets/bankrolls/manage_accounts.svg'

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
        <Items>
          <GridContent>
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
            <CardBankRoll />
          </GridContent>
        </Items>
      </Content>
    </Main>
  )
}

export default Bankroll
