import styled from 'styled-components';

import { colors } from '../styles/globalStyles';

export const Dashboard = styled.div`
    text-align: center;
    padding-bottom: 2rem;

    h1 {
        font-size: 1.2rem;
    }
`

export const CardsList = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 160px);
    column-gap: 15px;
    padding-top: 20px;
    text-align: initial;
`