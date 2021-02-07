import { lazy } from 'react';
import { MainLink, Wrapper } from '../../components/styles/globalStyles';
import { 
  Banner,
  BannerContent,
  BannerButtons,
  InitialSection,
  CardText,
  DashboardSection,
  Dashboard,
  CardsList,
  Link
}
from './styles';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCat, faDog, faSearch } from '@fortawesome/free-solid-svg-icons';

// img/svg
import svg from '../../assets/icons/undraw_good_doggy_4wfq.svg';

import PetCardDashboard from '../../components/PetCardDashboard/index'; 

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));

function Home() {
  return (<>
    <Header homePg={true}/>
    <Banner>
      <Wrapper>
        <BannerContent>
          <p>Uma patinha precisa de você!</p>
          <BannerButtons>
            <Link to='/'>
              <FontAwesomeIcon icon={faDog} size="2x"/> Ache um Cão
            </Link>
            <Link to='/'>
              <FontAwesomeIcon icon={faCat} size="2x"/> Ache um Gato
            </Link>
          </BannerButtons>
        </BannerContent>
      </Wrapper>
    </Banner>
    <Wrapper>
      <InitialSection>
        <div className="row">
          <CardText>
            <p>
              Procure por um animal para adoção
              pelo seu computador, tablet, smarthphone...
            </p>
            <MainLink to='/'>Pesquisar <FontAwesomeIcon icon={faSearch}/></MainLink>
          </CardText>
          <CardText>
            <p>
              Veja nossos artigos sobre como tratar
              seu companheiro, seja ele um gato ou cão
            </p>
            <MainLink to='/'>Informações <FontAwesomeIcon icon={faBook}/></MainLink>
          </CardText>
          <img src={svg}/>
        </div>
      </InitialSection>
    </Wrapper>
    <DashboardSection>
      <Wrapper>
        <PetCardDashboard/>
        <PetCardDashboard/>
      </Wrapper>
    </DashboardSection>
    <Footer/>
  </>);
}

export default Home;
