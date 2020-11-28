import styled from 'styled-components';

import { colors, MyBtn } from '../globalStyles';

import image from '../../assets/pets/dog01.jpg';

export const TopCard = styled.div.attrs(props => ({
    img: props.img,
}))`
    background: url(${image}) no-repeat center center;
    height: 15rem;
    width: 100%;
    background-size: cover;
`

export const Card = styled.div`
    overflow: hidden;
    max-width: 150px;
    height: 200px;
    border-radius: 4px 4px 0 0;
`
