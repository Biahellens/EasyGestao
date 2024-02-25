import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 15%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
  background-color: #11122d;
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
    flex-wrap: nowrap;
  }
`

export const BottomContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const TopContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: baseline;

  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`

export const WelcomeContent = styled.div`
  width: 50%;
  height: auto;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Text = styled.text`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`

export const StarImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`

export const RoutesContent = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const RouteLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: auto;
  }
`

export const TextLink = styled.text`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const RouteImg = styled.img`
  width: 24px;
  height: 24px;
`

export const LogoutImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`

export const RouteLogout = styled(Link)`
  width: 80%;
  text-decoration: none;
  color: #ff6262;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`

export const ButtoNew = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  background-color: #1ce3c7;
  font-size: 40px;
  text-align: center;
  color: #007c6b;
  box-shadow: 2px 2px 4px #007c6b;

  @media (min-width: 768px) {
    display: none;
  }
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`
