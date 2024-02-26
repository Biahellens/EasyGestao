import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Content,
  ContentText,
  ContentImage,
  LogoImage,
  TextArea,
  FormContent,
  Input,
  Text,
  Button,
  Label,
  LoginLink,
} from './style'
import logo from '../../assets/logo.svg'

const CreatedAccount = () => {
  const navigate = useNavigate()

  const handleSubmit = async () => {
    navigate('/newBankroll')
  }

  return (
    <>
      <Content>
        <ContentImage>
          <LogoImage src={logo} />
        </ContentImage>
        <ContentText>
          <TextArea>
            <Text>Cadastrar-se</Text>
            <FormContent onSubmit={handleSubmit}>
              <Label>Nome</Label>
              <Input type="name" placeholder="Escreva Aqui" />
              <Label>E-mail*</Label>
              <Input type="email" placeholder="mail.example@gmail.com" />
              <Label>Senha*</Label>
              <Input type="password" placeholder="********" />
              <Label>Confirme sua Senha*</Label>
              <Input type="password" placeholder="********" />
              <LoginLink to="/login">Já tenho uma conta</LoginLink>
            </FormContent>
            <Button type="submit">Salvar alterações</Button>
          </TextArea>
        </ContentText>
      </Content>
    </>
  )
}

export default CreatedAccount
