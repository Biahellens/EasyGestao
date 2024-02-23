import styled from 'styled-components'

export const Content = styled.div`
  width: 10%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #333;
  color: #fff;
  padding: 0 10px 0 10px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: -1px;
    padding: 0;
    left: 0;
    width: 100%;
    height: 80px;
    text-align: center;
    border-radius: 16px 16px 0 0;
    border-top: 1px solid transparent;
  }
`

export const WelcomeContent = styled.div`
  width: 88px;
  margin-top: 60px;
`

export const Text = styled.text`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  weight: 500;
`
