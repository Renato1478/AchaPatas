import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { 
    colors
} from '../styles/globalStyles';

import image from '../../assets/pets/dog01.jpg';

export const TopCard = styled.div`
    background: url(${image}) no-repeat center center;
    height: 10rem;
    width: 100%;
    padding: 0.5rem;
    background-size: cover;
    color: ${colors.notSoWhite};
    vertical-align: middle;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    text-shadow: 1px 1px rgba(0,0,0,0.25);
    h1 {
        font-size: 1rem;
    }
`

export const BodyCard = styled.div`
    background-size: cover;
    padding: 7px;
    font-size: 0.7rem;
    .race {
        font-weight: 500;
        margin-bottom: 2px;
    }
    .sex-age {
        color: #999999;
        font-weight: thin;
        margin-bottom: 2px;
    }
`

export const Card = styled(Link)`
    text-decoration: none;
    overflow: hidden;
    max-width: 10rem;
    border-radius: 4px;
    background-color: ${colors.notSoWhite};
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
    transition: ease 0.4s;
    &:hover {
        transform: translateY(-2px);
    }
`
