import React, { useEffect } from 'react';
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
  MyBtn
} from '../styles/globalStyles';

import logo from '../../assets/logo.svg';

function Header() {

  function animateHeader(offset) {
    if(offset > 50) {
      document.querySelector('#topHeader').classList.add('scrolling');
    } else {
      document.querySelector('#topHeader').classList.remove('scrolling');
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      animateHeader(window.pageYOffset);
    }
  }, []);

  return (<>
    <HeaderContainer id='topHeader'>
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
              <MyBtn to='/pets'>Entrar</MyBtn>
              <MyBtn to='/pets'>Cadastre-se</MyBtn>
            </div>
          </div>
        </HeaderContent>
      </Wrapper>
    </HeaderContainer>
  </>);
}

export default Header;