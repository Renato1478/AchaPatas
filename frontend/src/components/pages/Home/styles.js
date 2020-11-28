import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import banner00 from '../../../assets/pets/cat00.jpg';

import { colors, MyBtn } from '../../globalStyles';

export const Banner = styled.section`
    background-color: rgba(0, 0, 0, 0.8);
    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${banner00});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    min-height: 22rem;
    text-align: center;
`

export const BannerContent = styled.div`
    padding-top: 50px;
    color: ${colors.notSoWhite};

    p {
        font-size: 24px;
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

export const InitialSection = styled.div`
    margin: 70px 0px;

    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        div {
            padding: 0px 40px;
            p {
                font-weight: 600;
                font-size: 12px;
            }
            ${MyBtn} {
                margin: 15px 0;
            }
        }
    }
`

export const CardText = styled.div`
    max-width: 400px;
    width: 100%;
`

export const DashboardSection = styled.div`
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0% 100%);
    background-color: ${colors.veryLightGreen};
    padding-top: 40px;
`