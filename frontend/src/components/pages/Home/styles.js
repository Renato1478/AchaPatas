import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import banner00 from '../../../assets/pets/cat00.jpg';

import { colors } from '../../globalStyles';

export const Banner = styled.section`
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url(${banner00});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 22rem;
    width: auto;
    text-align: center;
`

export const BannerContent = styled.div`
    padding-top: 50px;
    color: ${colors.notSoWhite};

    p {
        font-size: 22px;
        text-shadow: 1px 2px 3px #000;
    }
`

export const Link = styled(LinkR)`
    text-decoration: none;
    color: ${colors.notSoBlack};
    font-weight: 600;
    font-size: 0.8rem;
`

export const BannerButtons = styled.div`
    margin-top: 100px;

    ${Link} {
        transition: 0.3s;
        padding: 4px 11px;
        background-color: ${colors.mainGreen};
        &:hover {
            color: ${colors.notSoWhite};
            background-color: ${colors.mainBlue};
        }
        &:first-child {
            border-radius: 12px 0 0 12px;
        }
        &:last-child {
            border-radius: 0 12px 12px 0;
            color: ${colors.notSoWhite};
            background-color: ${colors.darkGreen};
            &:hover {
                color: ${colors.notSoWhite};
                background-color: ${colors.darkBlue};
            }
        }
    }
`