import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1d33;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TitleContent = styled.div`
  width: 80%;
  text-align: start;
  align-items: center;
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0.5rem;
    width: 100%;
  }
}
`

export const Title = styled.text`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #fbfbfb;
  margin-left: 8px;
`

export const Img = styled.img<{ $size?: boolean }>`
  width: ${(props) => (props.$size ? '32px' : '32px')};
  height: ${(props) => (props.$size ? '32px' : '24px')};

  @media (max-width: 768px) {
    width: ${(props) => (props.$size ? '32px' : '24px')};
    height: ${(props) => (props.$size ? '32px' : '24px')};
  }
`

export const FormContent = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`

export const ItemContent = styled.div<{ $size?: boolean }>`
  width: ${(props) => (props.$size ? '88%' : '40%')};
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
  }
`

export const Label = styled.label`
  width: 100%;
  font-size: 16px;
  color: #fbfbfb;
  font-weight: 600;
  line-weight: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Important = styled.text`
  font-size: 16px;
  color: #ff6262;
  font-weight: 600;
  line-weight: 20px;
`

export const Input = styled.input<{ $size?: boolean }>`
  width: 100%;
  height: 28px;
  margin-top: 10px;
  padding: 4px;
  background-color: #181c3c;
  border: 1px solid #5b5fc0;
  border-radius: 10px;
  text-align: start;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #8a8a8a;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 4px;
  background-color: #181c3c;
  border: 1px solid #5b5fc0;
  border-radius: 10px;
  text-align: start;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #8a8a8a;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Option = styled.option`
  width: 100%;
  height: 30px;
  padding: 4px;
  background-color: #181c3c;
  border: 1px solid #5b5fc0;
  border-radius: 10px;
  text-align: start;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonContent = styled.div`
  width: 87%;
  display: flex;
  justify-content: end;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 8px;
    margin-bottom: 8rem;
  }
`

export const Button = styled.button`
  width: 300px;
  background-color: #1ce3c7;
  border: none;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  font-size: 16px;
  font-weight: 600;
  color: #004037;
  transition: text-shadow 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MoreBtn = styled.button`
  background-color: #1ce3c7;
  width: 40px;
  height: 40px;
  border-radius: 80%;
  margin-right: 4px;
`

export const TextBtn = styled.label`
  font-size: 14px;
  color: #fbfbfb;
  font-weight: 600;
  line-weight: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const MoreContent = styled.div`
  width: 88%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
  }
`
