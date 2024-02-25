import React from 'react'
import {
  Content,
  WelcomeContent,
  Text,
  StarImg,
  RoutesContent,
  RouteLink,
  RouteImg,
  BottomContent,
  TopContent,
  RouteLogout,
  LogoutImg,
  TextLink,
  ButtoNew,
  HomeLink,
} from './style'
import star from '../../assets/star_name.svg'
import list from '../../assets/navBar/article.svg'
import person from '../../assets/navBar/person.svg'
import bid_landscape from '../../assets/navBar/bid_landscape.svg'
import logout from '../../assets/navBar/logout.svg'
import home from '../../assets/navBar/home.svg'

function NavBar() {
  return (
    <Content>
      <TopContent>
        <WelcomeContent>
          <Text>
            Bem vindo, Paulo!
            <StarImg src={star} />
          </Text>
        </WelcomeContent>
        <RoutesContent>
          <HomeLink to="/">
            <RouteImg src={home} />
          </HomeLink>
          <RouteLink to="/">
            <RouteImg src={list} />
            <TextLink>Cliente</TextLink>
          </RouteLink>
          <ButtoNew>+</ButtoNew>
          <RouteLink to="/bankroll">
            <RouteImg src={bid_landscape} />
            <TextLink>Minhas Bancas</TextLink>
          </RouteLink>
          <RouteLink to="/">
            <RouteImg src={person} />
            <TextLink>Perfil</TextLink>
          </RouteLink>
        </RoutesContent>
      </TopContent>
      <BottomContent>
        <RouteLogout to="/">
          <LogoutImg src={logout} />
          Sair
        </RouteLogout>
      </BottomContent>
    </Content>
  )
}

export default NavBar
