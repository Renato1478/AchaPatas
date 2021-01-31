import styled from 'styled-components';

import { colors, Wrapper } from '../styles/globalStyles';

export const FooterContainer = styled.footer`
    width: 100%;
    border-top: 1px solid ${colors.veryLightGreen};
    background-color: ${colors.notSoWhite};
    color: ${colors.notSoBlack};
    padding: 1.2rem 0;
    font-size: 0.7rem;

    ${Wrapper} { 
        display: flex;
        justify-content: space-between;
    }
`

export const SocialMediaList = styled.div`
    display: flex;
    li {
        list-style: none;
        padding: 0 0.7rem;
    }
`