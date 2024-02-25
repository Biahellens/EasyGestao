import styled from 'styled-components'

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
  grid-template-columns: 26% 26% 26%;
  grid-auto-rows: 225px;

  @media (max-width: 768px) {
    grid-template-columns: 80%;
    padding-bottom: 120px;
  }

  @media (min-width: 770px) and (max-width: 1100px) {
    grid-template-columns: 90%;
    padding-bottom: 120px;
  }
`
