import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #11122d;
  justify-content: end;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NotificationsButton = styled.button`
  background-color: transparent;
  margin-right: 40px;
`

export const NotificationsImg = styled.img`
  width: 26px;
  height: 26px;
`
