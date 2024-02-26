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

import { NavBar, Header } from '../../../components'

import toBack from '../../../assets/toBack.svg'
import edit from '../../../assets/bankrolls/edit.svg'

function EditBankroll() {
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
          <Img src={edit} />
          <Title>Editar banca inicial</Title>
        </TitleContent>
        <FormContent>
          <ItemContent>
            <Label>Nome do Bankroll</Label>
            <Input placeholder="Minha Banca" />
          </ItemContent>
          <ItemContent>
            <Label>Tipo de Gestão</Label>
            <Select name="type-gestao">
              <Option value="">Aposta esportiva</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Escolha a Moeda</Label>
            <Select name="moeda">
              <Option value="">Real-BLR (R$)</Option>
              <Option></Option>
            </Select>
          </ItemContent>
          <ItemContent>
            <Label>Banca Inicial</Label>
            <Input placeholder="R$100,00" />
          </ItemContent>
          <ItemContent>
            <Label>% Stake</Label>
            <Input placeholder="1%" />
          </ItemContent>
          <ItemContent>
            <Label>Unidade</Label>
            <Input placeholder="R$10,00" />
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

export default EditBankroll
