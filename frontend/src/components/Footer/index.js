import { Wrapper } from '../styles/globalStyles';

import {
  FooterContainer,
  SocialMediaList
} from './styles';

export default function Footer() {
  return (<>
    <FooterContainer>
      <Wrapper>
        <div>©2020 AchaPatas.com.br</div>
        <SocialMediaList>
          {/* <li><FontAwesomeIcon icon={faCoffee} size="lg"/></li>
          <li><FontAwesomeIcon icon={faCoffee} size="lg"/></li>
          <li><FontAwesomeIcon icon={faCoffee} size="lg"/></li>
          <li><FontAwesomeIcon icon={faCoffee} size="lg"/></li> */}
        </SocialMediaList>
      </Wrapper>
    </FooterContainer>
  </>);
}