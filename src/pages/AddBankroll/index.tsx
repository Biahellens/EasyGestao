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
} from './style'

import { NavBar, Header } from '../../components'

import toBack from '../../assets/toBack.svg'
import attach_money from '../../assets/bankrolls/attach_money.svg'

function AddBankroll() {
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
          <Img src={attach_money} />
          <Title>Adicionar banca inicial</Title>
        </TitleContent>
        <FormContent>
          <ItemContent>
            <Label>Nome do Bankroll</Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>Tipo de Gestão</Label>
            <Select name="type-gestao">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Escolha a Moeda</Label>
            <Select name="moeda">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Banca Inicial</Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>% Stake</Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>Unidade</Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ButtonContent>
            <Button type="submit" onClick={handleSubmit}>
              Salvar alterações
            </Button>
          </ButtonContent>
        </FormContent>
      </Content>
    </Main>
  )
}

export default AddBankroll
