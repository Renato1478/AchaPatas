import { Link } from 'react-router-dom';

import {
      HeaderContent,
      HeaderContainer, 
      LinksList,
      NavLink,
      NavLogo,
      MyBtn
} from './styles';

import {
  Wrapper
} from '../globalStyles';

import logo from '../../assets/logo.svg';

function Header() {
  return (<>
    <HeaderContainer>
      <Wrapper>
        <HeaderContent>
          <Link to='/'><NavLogo alt="Logo" src={logo}></NavLogo></Link>
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