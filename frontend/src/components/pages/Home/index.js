import { MyBtn, Wrapper } from '../../globalStyles';
import PetCard from '../../PetCard/index';
import { 
  Banner,
  BannerContent,
  BannerButtons,
  InitialSection,
  CardText,
  DashboardSection,
  Link
}
from './styles';

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
          <CardText>
            <p>
              Procure por um animal para adoção<br/>
              pelo seu computador, tablet, smarthphone...
            </p>
            <MyBtn>Pesquisar</MyBtn>
          </CardText>
        </div>
      </InitialSection>
    </Wrapper>
    <DashboardSection>
      <Wrapper>
        <PetCard/>
      </Wrapper>
    </DashboardSection>
  </>);
}

export default Home;
