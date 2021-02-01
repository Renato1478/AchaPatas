import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, MainLink } from '../styles/globalStyles';

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 10px 0;

    .main {
        display: flex;

        ${MainLink} {
            margin: 0 3px;
        }
    }
`

export const NavLogo = styled.img`
    width: 90px;
`

export const NavLink =  styled(Link)`
    text-decoration: none;
    font-weight: 600;
    color: ${colors.notSoWhite};
`

export const LinksList = styled.div`
    list-style: none;
    display: flex;
    margin: auto 55px;

    ${NavLink} {
        padding: 0 16px;
    }
    ${NavLink}:last-child {
        padding: 0 0 0 16px;
    }
`

export const HeaderContainer = styled.nav`
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${colors.notSoWhite};
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    transition: all ease 0.4s;

    &.scrolling{
        background-color: #FAFAFA;
        color: ${colors.notSoBlack};

        ${NavLink} {
            color: ${colors.notSoBlack};
        }
    }
`