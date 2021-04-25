import { lazy } from 'react';
import { MainLink, Wrapper } from '../../components/styles/globalStyles';
import { 
  Banner,
  BannerContent,
  BannerButtons,
  InitialSection,
  CardText,
  DashboardSection,
  Link,
  BlogSection,
  NewsletterSection
}
from './styles';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCat, faDog, faSearch } from '@fortawesome/free-solid-svg-icons';

// img/svg
import svg from '../../assets/icons/undraw_pet_adoption_2qkw.svg';
import svg2 from '../../assets/icons/undraw_good_doggy_4wfq.svg';
import banner00 from '../../assets/pets/cat00.jpg';

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
    <InitialSection>
      <Wrapper>
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
          <img src={svg} alt="ilustração"/>
        </div>
      </Wrapper>
    </InitialSection>
    <DashboardSection className="bg-polygon">
      <Wrapper>
        <PetCardDashboard title={'Gatos para Adoção por Perto'}/>
      </Wrapper>
    </DashboardSection>
    <BlogSection>
      <Wrapper>
        <div className="main">
          <h2>Blog</h2>
          <div className="row">
            <div className="materia">
              <img src={banner00} alt="banner"/>
              <div className="content">
                <span>Por AchaPatas • Feb 11, 2016</span>
                <h4>5 Pet Safety Tips to Always Remember</h4>
                <p>
                  Talvez o maior ativo do produtor rural, o solo é a base da produção moderna opa
                  de alimentos e fibras. Alguns cuidam dele asa com masdasdasd...
                </p>
              </div>
            </div>
            <div className="materia">
              <img src={banner00} alt="banner"/>
              <div className="content">
                <span>Por AchaPatas • Feb 11, 2016</span>
                <h4>5 Pet Safety Tips to Always Remember</h4>
                <p>
                  Talvez o maior ativo do produtor rural, o solo é a base da produção moderna opa
                  de alimentos e fibras. Alguns cuidam dele asa com muito zelo...
                </p>
              </div>
            </div>
          </div>
          <MainLink to="/pets/1">Veja Nosso Blog</MainLink>
        </div>
      </Wrapper>
    </BlogSection>
    <DashboardSection>
      <Wrapper>
        <PetCardDashboard title={'Cães para Adoção por Perto'}/>
      </Wrapper>
    </DashboardSection>
    <NewsletterSection>
      <Wrapper>
        <div className="main">
          <div className="title">
            <h2>Receba Nossas<br/> Novidades</h2>
          </div>
          <form method="post" action="">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" placeholder="Insira seu Email"></input>
              <button type="submit">Inscrever-se</button>
            </div>
          </form>
          <img className="overlayed-img" src={svg2} alt="ilustração"/>
        </div>
      </Wrapper>
    </NewsletterSection>
    <Footer/>
  </>);
}

export default Home;
