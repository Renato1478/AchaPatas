import styled from 'styled-components';

import { 
    colors
} from '../styles/globalStyles';

const Hearth = styled.svg`
    display: block;
    margin: 0 auto;
    fill: #CDCDCD;
    transition: 0.4s;
`

const Circle = styled.span`
    height: 2rem;
    width: 2rem;
    background-color: ${colors.notSoWhite};
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    &:hover {
        ${Hearth} {
            fill: rgba(255,0,0,0.5);
        }
    }
    cursor: pointer;
`

export default function LikeButton() {
    return (<>
        <Circle>
            <Hearth fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 17.867188 3.890625 C 15.773438 3.890625 13.980469 5.382813 12.996094 6.414063 C 12.015625 5.382813 10.226563 3.890625 8.132813 3.890625 C 4.519531 3.890625 2 6.40625 2 10.007813 C 2 13.980469 5.132813 16.546875 8.160156 19.027344 C 9.589844 20.199219 11.070313 21.410156 12.203125 22.757813 C 12.394531 22.980469 12.675781 23.109375 12.96875 23.109375 L 13.027344 23.109375 C 13.324219 23.109375 13.601563 22.980469 13.792969 22.757813 C 14.929688 21.410156 16.40625 20.199219 17.839844 19.027344 C 20.867188 16.546875 24 13.980469 24 10.007813 C 24 6.40625 21.480469 3.890625 17.867188 3.890625 Z"/></Hearth>
        </Circle>
    </>);
  }
  