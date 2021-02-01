import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const colors = {
    mainBlue: '#3B439B',
    darkBlue: '#252A62',
    notSoBlack: '#424242',
    notSoWhite: '#FAFAFA',
    mainGreen: '#27AE60',
    darkGreen: '#228B4E',
    veryLightGreen: '#E4F0E9'
}

export const Wrapper = styled.div`
    align-items: center;
    width: 100%;
    max-width: 850px;
    margin: auto auto;
`

export const MainLink = styled(Link)`
    display: inline-flexbox;
    transition: 0.3s;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 8px;
    background-color: ${colors.darkBlue};
    border: 1px solid ${colors.darkBlue};
    color: ${colors.notSoWhite};
    &:hover {
        background-color: ${colors.notSoWhite};
        color: ${colors.darkBlue};
    }
`