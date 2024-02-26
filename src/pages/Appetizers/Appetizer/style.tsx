import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1d33;
  background-size: cover;
`

export const TitleContent = styled.div`
  width: 80%;
  text-align: start;
  align-items: center;
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-left: 0;
    width: 100%;
  }
}
`

export const Title = styled.text`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #fbfbfb;
  margin-left: 0.8rem;
`

export const Img = styled.img<{ $size?: boolean }>`
  width: ${(props) => (props.$size ? '48px' : '28px')};
  height: ${(props) => (props.$size ? '48px' : '28px')};
  margin-left: 0.8rem;

  @media (max-width: 768px) {
    width: ${(props) => (props.$size ? '48px' : '24px')};
    height: ${(props) => (props.$size ? '48px' : '24px')};
  }
`

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const GridContent = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  justify-content: space-evenly;
  place-items: center;
  grid-template-columns: 40% 40%;
  grid-auto-rows: 225px;

  @media (max-width: 768px) {
    grid-template-columns: 30% 30%;
    grid-auto-rows: 180px;
  }
`

export const CardType = styled.div`
  width: 100%;
  height: 128px;
  padding: 16px;
  background-color: #25273f;
  border: 1px solid #5e5f72;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;

  @media (max-width: 768px) {
    height: 100px;
  }
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`

export const Text = styled.text`
  width: 100%;
  color: #ffffff;
  font-weigh: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 8px;
`

export const LinkType = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;
`
