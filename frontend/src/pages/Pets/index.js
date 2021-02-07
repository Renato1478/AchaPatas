import { lazy } from 'react'; 
import { MainLink, Wrapper } from '../../components/styles/globalStyles';
import {
  PetGallery
}
from './styles';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PetCardDashboard from '../../components/PetCardDashboard';

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));

function Pets() {
return (<>
  <Header/>
  <Wrapper>
    <PetGallery/>
    <PetCardDashboard/>
  </Wrapper>
  <Footer/>
</>);
}

export default Pets;