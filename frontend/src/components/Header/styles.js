import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../globalStyles';

export const HeaderContainer = styled.nav`
    background: #FAFAFA;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    color: ${colors.notSoBlack};
    padding: 10px 0;

    .main {
        display: flex;
    }
`

export const NavLogo = styled.img`
    width: 90px;
`

export const NavLink =  styled(Link)`
    text-decoration: none;
    color: ${colors.notSoBlack};
    font-weight: 600;
    font-size: 1rem;
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

export const MyBtn = styled(Link)`
    transition: 0.3s;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 8px;
    background-color: ${colors.darkBlue};
    border: 1px solid ${colors.darkBlue};
    color: ${colors.notSoWhite};
    margin: 0 2px;
    &:hover {
        background-color: ${colors.notSoWhite};
        color: ${colors.darkBlue};
    }
`