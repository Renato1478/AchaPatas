import styled from 'styled-components';

import { colors } from '../styles/globalStyles';

const footerHeight = '2.5rem';

export const FooterContainer = styled.footer`
    clear: both;
    position: absolute;
    height: 2.2rem;
    margin-top: -2.2rem;
    width: 100%;
    background-color: ${colors.notSoBlack};
    color: ${colors.notSoWhite};
    padding: 10px 0;
    font-size: 0.7rem;
`