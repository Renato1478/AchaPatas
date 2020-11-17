import {HeaderContent, HeaderContainer, HeaderList} from './styles';

import logo from '../../assets/logo.svg';

function Header() {
  return (<>
    <HeaderContainer>
      <HeaderContent>
        <img alt="Logo" src={logo}></img>
        <HeaderList>
          <li>Sobre</li>
          <li>Registrar um Pet</li>
          <li>Entrar</li>
          <li>Cadastre-se</li>
        </HeaderList>
      </HeaderContent>
    </HeaderContainer>
  </>);
}

export default Header;