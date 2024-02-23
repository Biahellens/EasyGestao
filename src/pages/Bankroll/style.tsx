import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1d33;

  @media (max-width: 768px) {
    width: 100%;
  }
`
