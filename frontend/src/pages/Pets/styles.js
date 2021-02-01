import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import banner00 from '../../assets/pets/cat00.jpg';

import { colors, MainLink } from '../../components/styles/globalStyles';

export const DashboardSection = styled.div`
    width: 100%;
    clip-path: polygon(0 3.5rem, 100% 0, 100% 100%, 0% 100%);
    background-color: ${colors.veryLightGreen};
    padding-top: 4.5rem;
`
