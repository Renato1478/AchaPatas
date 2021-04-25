import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import banner00 from '../../assets/pets/cat00.jpg';

import { colors, MainLink } from '../../components/styles/globalStyles';

export const Banner = styled.section`
    background-color: rgba(0, 0, 0, 0.8);
    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${banner00});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    min-height: 23rem;
    text-align: center;
    padding-top: 100px;
`

export const BannerContent = styled.div`
    padding-top: 50px;
    color: ${colors.notSoWhite};

    p {
        font-size: 1.6rem;
        text-shadow: 1px 2px 3px #000;
    }
`

export const Link = styled(LinkR)`
    text-decoration: none;
    color: ${colors.notSoBlack};
    font-weight: 600;
    font-size: 0.7rem;
`

export const BannerButtons = styled.div`
    margin-top: 6rem;

    ${Link} {
        transition: 0.3s;
        padding: 4px 11px;
        padding-top: 12px;
        background-color: ${colors.mainGreen};
        &:hover {
            color: ${colors.notSoWhite};
            background-color: ${colors.mainBlue};
        }
        &:first-child {
            border-radius: 16px 0 0 16px;
        }
        &:last-child {
            border-radius: 0 16px 16px 0;
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
    margin: 40px 0px;

    .row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 40px;
        margin-bottom: 30px;
        padding: 0 20px;
        img {
            width: 100%;
        }
    }
`

export const BlogSection = styled.div`
    margin: 40px 0px;

    .main {
        display: block;
        text-align: center;
        .row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 40px;
            padding: 40px 20px 10px;
            .materia {
                display: flex;
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 4%;
                }
                .content {
                    padding: 0px 20px 10px;
                    text-align: left;
                    span {
                        font-size: 0.8rem;
                    }
                    h4 {
                        padding-top: 0.4rem;
                    }
                    p {
                        padding-top: 0.8rem;
                    }
                }
            }
        }
        ${MainLink} {
            margin-top: 1rem;
            padding-left: 50px;
            padding-right: 50px;
        }
    }
`

export const NewsletterSection = styled.div`
    padding: 30px 0px;

    .main {
        display: grid;
        position: relative;
        grid-template-columns: 1fr 4fr;
        column-gap: 30px;
        padding: 0px 20px;

        .title {
            display: flex;
            color: ${colors.mainBlue};
            text-align: center;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: ${colors.veryLightGreen};
            width: 160px;
            height: 160px;
        }

        form {
            display: flex;
            align-items: center;
            .form-control {
                label {
                    display: block;
                    font-weight: bold;
                    padding: 4px 0px;
                }
                input {
                    border: 0;
                    outline: none;
                    box-sizing: border-box;
                    padding: 10px;
                    font-size: 12px;
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    margin-right: 12px;
                    width: 18rem;
                }
                button {
                    border: 0;
                    outline: none;
                    box-sizing: border-box;
                    padding: 10px;
                    font-size: 12px;
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    color: #FFF;
                    background-color: ${colors.mainGreen};
                    margin-right: 12px;
                }
            }
        }
        .overlayed-img {
            width: 280px;
            height: 280px;
            opacity: 0.4;
            position: absolute; 
            z-index: -1;
            top: -60px; 
            right: 30px;
        }
    }
`

export const CardText = styled.div`
    max-width: 400px;
    width: 100%;
    margin: auto 0;
    p {
        font-weight: 600;
        font-size: 12px;
    }
    ${MainLink} {
        margin: 15px 0;
    }
`

export const DashboardSection = styled.div`
    width: 100%;
    background-color: ${colors.veryLightGreen};
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;

    &.bg-polygon {
    padding-top: 4.5rem;
        clip-path: polygon(0 3.5rem, 100% 0, 100% 100%, 0% 100%);
    }
`