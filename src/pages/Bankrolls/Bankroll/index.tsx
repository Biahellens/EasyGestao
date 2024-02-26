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

import { NavBar, Header, CardBankRoll } from '../../../components'

import toBack from '../../../assets/toBack.svg'
import manage_accounts from '../../../assets/bankrolls/manage_accounts.svg'

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
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
            <CardBankRoll
              name="Minha banca"
              unit="R$10,00"
              stake="1"
              initialBanking="R$100,00"
              profit="R$350"
              roi="70.00"
              appetizer="20"
              negative="5"
              positive="15"
            />
          </GridContent>
        </Items>
      </Content>
    </Main>
  )
}

export default Bankroll
