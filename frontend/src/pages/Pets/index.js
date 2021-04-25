import React, { lazy } from 'react';
// import ReactDOM from 'react-dom'; 

// // icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PetCardDashboard from '../../components/PetCardDashboard';
import PetGallery from '../../components/PetGallery';

import { Wrapper } from '../../components/styles/globalStyles';

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));

function Pets() {
  return (<>
    <Header/>
    <PetGallery/>
    <Wrapper>
      <PetCardDashboard title={'Animais Relacionados'}/>
    </Wrapper>
    <Footer/>
  </>);
}

export default Pets;