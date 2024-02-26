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

const Login = () => {
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
            <Text>Login</Text>
            <FormContent onSubmit={handleSubmit}>
              <Label>E-mail*</Label>
              <Input type="email" placeholder="mail.example@gmail.com" />
              <Label>Senha*</Label>
              <Input type="password" placeholder="********" />
              <LoginLink to="/">Esqueci Minha Senha</LoginLink>
            </FormContent>
            <Button type="submit">Salvar alterações</Button>
            <LoginLink $size $align to="/createdAccount">
              Cadastrar-se
            </LoginLink>
          </TextArea>
        </ContentText>
      </Content>
    </>
  )
}

export default Login
