import LikeButton from './LikeButton';

import { 
  Card,
  TopCard,
  BodyCard
}
from './styles';

export default function PetCard() {
  return (<>
    <Card to='/pets'>
        <TopCard>
          <h1>Lorem</h1>
          <LikeButton/>
        </TopCard>
        <BodyCard>
          <div className='race'>Raça Mista</div>
          <div className='sex-age'>Macho • Jovem</div>
        </BodyCard>
    </Card>
  </>);
}
