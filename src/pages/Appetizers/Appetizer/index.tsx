import React from 'react'
import {
  Content,
  Main,
  Title,
  TitleContent,
  Img,
  GridContent,
  Items,
  CardType,
  Icon,
  Text,
  LinkType,
} from './style'

import { NavBar, Header } from '../../../components'

import toBack from '../../../assets/toBack.svg'
import newAppetizer from '../../../assets/appetizers/new.svg'
import simple from '../../../assets/appetizers/simple.svg'
import multiple from '../../../assets/appetizers/multiplas.svg'
import check from '../../../assets/appetizers/check.svg'
import lay from '../../../assets/appetizers/lay.svg'
import cash from '../../../assets/appetizers/cash.svg'
import database from '../../../assets/appetizers/database.svg'

function Appetizer() {
  return (
    <Main>
      <NavBar />
      <Content>
        <Header />
        <TitleContent>
          <Img src={toBack} $size />
          <Img src={newAppetizer} />
          <Title>Adicionar Entradas</Title>
        </TitleContent>
        <Items>
          <GridContent>
            <CardType>
              <LinkType to="/appetizerSimple">
                <Icon src={simple} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/appetizerMultiple">
                <Icon src={multiple} />
                <Text>Multiplas</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/appetizerBack">
                <Icon src={check} />
                <Text>Back</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/appetizerLay">
                <Icon src={lay} />
                <Text>Lay</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/appetizerCash">
                <Icon src={cash} />
                <Text>Cash</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/appetizerMTT">
                <Icon src={database} />
                <Text>MTT</Text>
              </LinkType>
            </CardType>
          </GridContent>
        </Items>
      </Content>
    </Main>
  )
}

export default Appetizer
