import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Content,
  Main,
  FormContent,
  ItemContent,
  Input,
  Label,
  Option,
  Select,
  Button,
  ButtonContent,
  Title,
  TitleContent,
  Img,
  Important,
} from './style'

import { NavBar, Header } from '../../../components'

import toBack from '../../../assets/toBack.svg'
import database from '../../../assets/appetizers/database.svg'

function AppetizerMTT() {
  const navigate = useNavigate()

  const handleSubmit = async () => {
    navigate('/bankroll')
  }

  return (
    <Main>
      <NavBar />
      <Content>
        <Header />
        <TitleContent>
          <Img src={toBack} $size />
          <Img src={database} />
          <Title>Adicionar sessão MTT</Title>
        </TitleContent>
        <FormContent>
          <ItemContent>
            <Label>
              Escolha o bankroll
              <Important>*</Important>
            </Label>
            <Select name="type-bankroll">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>
              BR inicial
              <Important>*</Important>
            </Label>
            <Input placeholder="R$00,00" />
          </ItemContent>
          <ItemContent>
            <Label>BR final</Label>
            <Select name="moeda">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Nº de telas</Label>
            <Input placeholder="0" type="number" />
          </ItemContent>
          <ItemContent>
            <Label>Mn jogados</Label>
            <Input placeholder="0 mn" type="number" />
          </ItemContent>
          <ItemContent>
            <Label>Sala</Label>
            <Select name="type-class">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent $size>
            <Label>Andamento da sessão</Label>
            <Select name="type-session">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ButtonContent>
            <Button type="submit" onClick={handleSubmit}>
              Adicionar
            </Button>
          </ButtonContent>
        </FormContent>
      </Content>
    </Main>
  )
}

export default AppetizerMTT
