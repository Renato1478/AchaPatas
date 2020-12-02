import styled from 'styled-components';

import { 
    colors
} from '../styles/globalStyles';

import image from '../../assets/pets/dog01.jpg';

export const TopCard = styled.div`
    background: url(${image}) no-repeat center center;
    height: 17.5rem;
    width: 100%;
    padding: 10px;
    background-size: cover;
    color: ${colors.notSoWhite};
    vertical-align: middle;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    text-shadow: 1px 1px rgba(0,0,0,0.25);
    h1 {
        font-size: 1.5rem;
    }
`

export const BodyCard = styled.div`
    background-size: cover;
    padding: 10px;
    .race {
        font-weight: 500;
        margin-bottom: 2px;
    }
    .sex-age {
        color: #999999;
        font-weight: thick;
        margin-bottom: 2px;
    }
`

export const Card = styled.div`
    overflow: hidden;
    max-width: 180px;
    border-radius: 4px 4px 4px 4px;
    background-color: ${colors.notSoWhite};
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
`
