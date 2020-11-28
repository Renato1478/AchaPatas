import { MyBtn, Wrapper } from '../globalStyles';
import { 
  Card,
  TopCard
}
from './styles';

export default function PetCard() {
  return (<>
    <Card>
        <TopCard/>
    </Card>
    <Card>
        <TopCard/>
    </Card>
  </>);
}
