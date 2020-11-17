import styled from 'styled-components'

const darkBlue = '#252A62';

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
    z-index: 1;
    width: 100%;
    max-width: 850px;
    color: #424242;
    padding: 20px 0;
    
    img {
        width: 90px;
    }
`

export const HeaderList = styled.ul`
    list-style: none;
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    margin: auto 0;

    li {
        padding: 0 16px;
    }
    li:last-child {
        color: ${darkBlue};
        padding: 0 0 0 16px;
    }
`