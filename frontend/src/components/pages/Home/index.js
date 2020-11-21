import { Wrapper } from '../../globalStyles';
import { 
  Banner,
  BannerContent,
  BannerButtons,
  Link
}
from './styles';

function Home() {
  return (<>
    <Banner>
      <BannerContent>
        <p>Uma patinha precisa de você!</p>
        <BannerButtons>
          <Link>Ache um Cão</Link>
          <Link>Ache um Gato</Link>
        </BannerButtons>
      </BannerContent>
    </Banner>
    <Wrapper>
      COCOZIN
    </Wrapper>
  </>);
}

export default Home;
