import { MyBtn, Wrapper } from '../../styles/globalStyles';
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
import svg from '../../../assets/icons/undraw_good_doggy_4wfq.svg';

import PetCard from '../../PetCard/index';

function Home() {
  return (<>
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
            <MyBtn to='/'>Pesquisar <FontAwesomeIcon icon={faSearch}/></MyBtn>
          </CardText>
          <CardText>
            <p>
              Veja nossos artigos sobre como tratar
              seu companheiro, seja ele um gato ou cão
            </p>
            <MyBtn to='/'>Informações <FontAwesomeIcon icon={faBook}/></MyBtn>
          </CardText>
          <img src={svg}/>
        </div>
      </InitialSection>
    </Wrapper>
    <DashboardSection>
      <Wrapper>
        <Dashboard>
          <h1>Cães para adoção</h1>
          <CardsList>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
          </CardsList>
        </Dashboard>
        <Dashboard>
          <h1>Gatos para adoção</h1>
          <CardsList>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
          </CardsList>
        </Dashboard>
      </Wrapper>
    </DashboardSection>
  </>);
}

export default Home;
