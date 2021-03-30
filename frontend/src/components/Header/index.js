import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
      HeaderContent,
      HeaderContainer, 
      LinksList,
      NavLink,
      NavLogo,
} from './styles';

import {
  Wrapper,
  MainLink
} from '../styles/globalStyles';

import logo from '../../assets/logo.svg';

function Header(props) {

  const [onTop, setOnTop] = useState(false);

  useEffect(() => {
    function animateHeader(offset) {
      if(offset > 50) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    }
    if(props.homePg) {
      animateHeader(window.pageYOffset);
      window.onscroll = () => {
        animateHeader(window.pageYOffset);
      }
    }
  }, []);

  return (<>
    <HeaderContainer className={`${onTop ? 'on-top' : ''}`}>
      <Wrapper>
        <HeaderContent>
          <Link to='/'>
            <NavLogo alt="Logo" src={logo}></NavLogo>
          </Link>
          <div className="main">
            <LinksList>
              <NavLink to='/pets'>Sobre</NavLink>
              <NavLink to='/pets'>Registrar um Pet</NavLink>
            </LinksList>
            <div>
              <MainLink to='/pets'>Entrar</MainLink>
              <MainLink to='/pets'>Cadastre-se</MainLink>
            </div>
          </div>
        </HeaderContent>
      </Wrapper>
    </HeaderContainer>
  </>);
}

export default Header;