import styled from 'styled-components'

export const Content = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px){
    position: fixed;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 80px;
    text-align: center;
    border-radius: 16px 16px 0 0;
    border-top: 1px solid transparent;
  }
`