import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1d33;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TitleContent = styled.div`
  width: 100%;
  text-align: start;
  align-items: center;
  display: flex;
  margin-top: 2rem;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
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
