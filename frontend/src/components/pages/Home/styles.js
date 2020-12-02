import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import banner00 from '../../../assets/pets/cat00.jpg';

import { colors, MyBtn } from '../../styles/globalStyles';

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
    margin: 50px 0px;

    .row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 40px;
        margin-bottom: 30px;
        img {
            width: 100%;
        }
    }
    padding: 0 10px;
`

export const CardText = styled.div`
    max-width: 400px;
    width: 100%;
    margin: auto 0;
    p {
        font-weight: 600;
        font-size: 12px;
    }
    ${MyBtn} {
        margin: 15px 0;
    }
`

export const DashboardSection = styled.div`
    width: 100%;
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0% 100%);
    background-color: ${colors.veryLightGreen};
    padding: 40px 0;
    padding-top: 70px;
`

export const Dashboard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 40px;
`