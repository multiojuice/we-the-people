import styled from 'styled-components'

const NavStyled = styled.div`
    height: auto;
    width: -moz-available;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 2vh 5vh;
`

const NavLinksStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0px 50px;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: large;
}
`
const NavLinkStyled = styled.a`
    font-weight: light;
    margin: 1em 3em;
`


const Title = styled.h1`
    color: black;
    font-size: 60px;
    font-family: 'Pinyon Script', cursive;
`

export {
    NavStyled,
    NavLinksStyled,
    NavLinkStyled,
    Title
}