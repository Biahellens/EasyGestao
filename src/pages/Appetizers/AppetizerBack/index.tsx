import React, { useState } from 'react'
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
import check from '../../../assets/appetizers/check.svg'

function AppetizerBack() {
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
          <Img src={check} />
          <Title>Adicionar entrada back</Title>
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
              Unidade
              <Important>*</Important>
            </Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>
              Qtd de aposta
              <Important>*</Important>
            </Label>
            <Select name="moeda">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>
              Valor apostado
              <Important>*</Important>
            </Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent $size>
            <Label>
              Valor de saída
              <Important>*</Important>
            </Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>Estratégia</Label>
            <Select name="type-strategy">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Esporte</Label>
            <Select name="type-sport">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>
              % Stake
              <Important>*</Important>
            </Label>
            <Input placeholder="Escreva aqui" />
          </ItemContent>
          <ItemContent>
            <Label>Tipster</Label>
            <Select name="type-tipster">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Bookmaker</Label>
            <Select name="type-bookmaker">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>
              Situação
              <Important>*</Important>
            </Label>
            <Select name="type-situation">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>ODD final </Label>
            <Select name="odd-finally">
              <Option value="">Buscar item</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>ODD entrada</Label>
            <Select name="odd-start">
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

export default AppetizerBack
