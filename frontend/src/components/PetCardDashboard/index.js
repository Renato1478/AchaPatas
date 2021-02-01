import PetCard from '../PetCard';

import { 
    Dashboard,
    CardsList
}
from './styles';

export default function PetCardDashboard() {
  return (<>
    <Dashboard>
        <h1>Animais relacionados</h1>
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