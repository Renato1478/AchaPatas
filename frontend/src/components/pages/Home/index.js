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

import svg from '../../../assets/icons/undraw_good_doggy_4wfq.svg';

import PetCard from '../../PetCard/index';

function Home() {
  return (<>
    <Banner>
      <Wrapper>
        <BannerContent>
          <p>Uma patinha precisa de você!</p>
          <BannerButtons>
            <Link>
            Ache um Cão</Link>
            <Link>
            Ache um Gato</Link>
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
            <MyBtn>Pesquisar</MyBtn>
          </CardText>
          <CardText>
            <p>
              Veja nossos artigos sobre como tratar
              seu companheiro, seja ele um gato ou cão
            </p>
            <MyBtn>Informações</MyBtn>
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
