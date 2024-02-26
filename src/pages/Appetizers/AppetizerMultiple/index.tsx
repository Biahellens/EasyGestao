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
  MoreBtn,
  MoreContent,
  TextBtn,
} from './style'

import { NavBar, Header } from '../../../components'

import toBack from '../../../assets/toBack.svg'
import multiple from '../../../assets/appetizers/multiplas.svg'

function AppetizerMultiple() {
  const [odds, setOdds] = useState<string[]>([''])
  const navigate = useNavigate()

  const handleSubmit = async () => {
    navigate('/bankroll')
  }

  const handleAddInput = () => {
    setOdds([...odds, ''])
  }

  const handleInputChange = (index: number, value: string) => {
    const newOdds = [...odds]
    newOdds[index] = value
    setOdds(newOdds)
  }

  return (
    <Main>
      <NavBar />
      <Content>
        <Header />
        <TitleContent>
          <Img src={toBack} $size />
          <Img src={multiple} />
          <Title>Adicionar aposta Multiplas</Title>
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
          <MoreContent>
            {odds.map((odds, index) => (
              <ItemContent key={index}>
                <Label>
                  ODDS
                  <Important>*</Important>
                </Label>
                <Input
                  placeholder="Escreva aqui"
                  value={odds}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </ItemContent>
            ))}
            <TextBtn>
              <MoreBtn type="button" onClick={handleAddInput}>
                +
              </MoreBtn>
              Adicionar aposta
            </TextBtn>
          </MoreContent>
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

export default AppetizerMultiple
