import styled from 'styled-components'

const NavStyled = styled.div`
    height: auto;
    width: 93.1%;
    background-color: #7d8cc4;
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 10px 50px 10px;
`

const NavLinksStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0px 50px;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    font-size: large;
}
`
const NavLinkStyled = styled.a`
    font-weight: light;
`


const Title = styled.h1`
    color: black;
    font-size: 40px;
`

export {
    NavStyled,
    NavLinksStyled,
    NavLinkStyled,
    Title
}