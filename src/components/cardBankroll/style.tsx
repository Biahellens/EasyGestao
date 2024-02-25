import styled from 'styled-components'

interface TextProps {
  $weight?: boolean
  $color?: 'red' | 'green'
  $width?: '50%' | '100%'
  $size?: boolean
  $align?: boolean
}

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgba(37, 39, 63, 1);
  border-radius: 10px;
  border: 1px solid rgba(94, 95, 114, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
`

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`

export const Button = styled.button`
  background-color: rgba(120, 122, 182, 0.35);
  width: 83px;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 2px 12px 2px 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Img = styled.img`
  width: 12px;
  height: 12px;
`

export const Text = styled.text<TextProps>`
  text-align: ${(props) => (props.$align ? 'end' : 'start')};
  font-size: ${(props) => (props.$size ? '14px' : '12px')};
  line-height: 18px;
  font-weight: ${(props) => (props.$weight ? '700' : '400')};
  color: ${(props) => {
    switch (props.$color) {
      case 'red':
        return '#ff6666'
      case 'green':
        return '#85E0A3'
      default:
        return 'white'
    }
  }};
  width: ${(props) => {
    switch (props.$width) {
      case '50%':
        return '50%'
      case '100%':
        return '100%'
      default:
        return ''
    }
  }};
`

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`

export const LeftContent = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
  align-content: baseline;
`

export const RightContent = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 14px;
  align-items: center;
  align-content: space-around;
  height: 80px;
`

export const InfoContent = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
