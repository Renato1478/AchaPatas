import React, { lazy } from 'react';
// import ReactDOM from 'react-dom'; 

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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