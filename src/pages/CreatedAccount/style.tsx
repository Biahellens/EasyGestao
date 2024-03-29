import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #1c1d33;
  background-size: cover;
  font-family: 'Inter', sans-serif;
`

export const ContentImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoImage = styled.img`
  width: 80%;
`

export const ContentText = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-content: start;
    align-items: start;
  }
`

export const TextArea = styled.div`
  width: 70%;
  height: 80vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    background-color: transparent;
    align-content: start;
    align-items: start;
  }
`

export const Button = styled.button`
  width: 80%;
  height: 36px;
  padding: 2.5;
  background-color: #1ce3c7;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #004037;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`

export const FormContent = styled.form`
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 0;
  }
`

export const Text = styled.text`
  color: ##11122d;
  text-align: center;
  width: 100%;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    color: #fbfbfb;
  }
`

export const Label = styled.label`
  color: ##11122d;
  text-align: start;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 20px;

  @media (max-width: 768px) {
    color: #fbfbfb;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #5e5f72;
  border-radius: 10px;
  margin-top: 8px;
  text-align: start;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  padding: 2.5px;

  @media (max-width: 768px) {
    border: 1px solid #5b5fc0;
    background-color: #1c1d33;
  }
`

export const LoginLink = styled(Link)`
  width: 100%;
  display: flex;
  margin-top: 8px;
  justify-content: end;
  color: #5b5fc0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    color: #ffa900;
  }
`
