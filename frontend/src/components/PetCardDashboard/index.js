import PetCard from '../PetCard';

import { 
    Dashboard,
    CardsList
}
from './styles';

export default function PetCardDashboard(props) {
  const {title} = props;
  return (<>
    <Dashboard>
        <h1>{title}</h1>
        <CardsList>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
        </CardsList>
    </Dashboard>
  </>);
}