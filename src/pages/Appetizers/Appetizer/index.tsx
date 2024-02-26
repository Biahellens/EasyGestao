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
              <LinkType to="/">
                <Icon src={multiple} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/">
                <Icon src={check} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/">
                <Icon src={lay} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/">
                <Icon src={cash} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
            <CardType>
              <LinkType to="/">
                <Icon src={database} />
                <Text>Simples</Text>
              </LinkType>
            </CardType>
          </GridContent>
        </Items>
      </Content>
    </Main>
  )
}

export default Appetizer
