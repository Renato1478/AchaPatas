import { MainLink, Wrapper } from '../../components/styles/globalStyles';
import {
}
from './styles';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PetCardDashboard from '../../components/PetCardDashboard';

function Pets() {
return (<>
  <Wrapper>
    <PetCardDashboard/>
  </Wrapper>
</>);
}

export default Pets;