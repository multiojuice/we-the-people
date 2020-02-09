import styled from 'styled-components'

const NavStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    margin: 1vh 7vh;
`

const NavLinksStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: large;
}
`
const NavLinkStyled = styled.a`
    font-weight: light;
    margin: 0vh 2vh;
`


const Title = styled.h1`
    color: black;
    font-size: 35px;
    font-family: 'Pinyon Script', cursive;
`

export {
    NavStyled,
    NavLinksStyled,
    NavLinkStyled,
    Title
}