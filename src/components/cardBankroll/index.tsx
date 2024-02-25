import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Content,
  Text,
  Title,
  TopContent,
  TitleContent,
  LeftContent,
  RightContent,
  InfoContent,
  Button,
  Img,
} from './style'

import edit from '../../assets/bankrolls/edit.svg'

interface CardBankRollProps {
  name: string
  unit: string
  stake: string
  initialBanking: string
  roi: string
  profit: string
  appetizer: string
  positive: string
  negative: string
}

function CardBankRoll(props: CardBankRollProps) {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate('/editBankroll')
  }
  return (
    <Content>
      <TitleContent>
        <Title>Trade esportiva</Title>
        <Button type="button" onClick={handleClick}>
          <Img src={edit} />
          <Text>Editar</Text>
        </Button>
      </TitleContent>
      <TopContent>
        <Text>
          Nome:
          <Text $weight> {props.name}</Text>
        </Text>
        <Text>
          Unidade:
          <Text $weight> {props.unit}</Text>
        </Text>
        <Text>
          % Stake:
          <Text $weight> {props.stake}%</Text>
        </Text>
      </TopContent>
      <LeftContent>
        <Text $width="100%">Banca Inicial:</Text>
        <Text $width="100%">{props.initialBanking}</Text>
        <InfoContent>
          <Text $width="50%">ROI</Text>
          <Text $width="50%">Profit</Text>
          <Text $width="50%" $color="green" $weight $size>
            +{props.roi}%
          </Text>
          <Text $width="50%" $color="green" $weight $size>
            +{props.profit}
          </Text>
        </InfoContent>
      </LeftContent>
      <RightContent>
        <Text $width="50%">Entradas</Text>
        <Text $width="50%" $weight $size $align>
          {props.appetizer}
        </Text>
        <Text $width="50%" $color="green">
          Positivo
        </Text>
        <Text $width="50%" $color="green" $weight $size $align>
          {props.positive}
        </Text>
        <Text $width="50%" $color="red">
          Negativo
        </Text>
        <Text $width="50%" $color="red" $weight $size $align>
          {props.negative}
        </Text>
      </RightContent>
    </Content>
  )
}

export default CardBankRoll
