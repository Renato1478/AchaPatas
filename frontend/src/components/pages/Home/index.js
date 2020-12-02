import { MyBtn, Wrapper } from '../../styles/globalStyles';
import PetCard from '../../PetCard/index';
import { 
  Banner,
  BannerContent,
  BannerButtons,
  InitialSection,
  CardText,
  DashboardSection,
  Dashboard,
  Link
}
from './styles';

import svg from '../../../assets/icons/undraw_good_doggy_4wfq.svg';

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
          <PetCard/>
          <PetCard/>
          <PetCard/>
          <PetCard/>
        </Dashboard>
      </Wrapper>
    </DashboardSection>
  </>);
}

export default Home;
