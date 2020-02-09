import styled from 'styled-components'

const NavStyled = styled.div`
    height: auto;
    width: 100%;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 2em 0em;
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
    margin: 0em 3em;
`


const Title = styled.h1`
    color: black;
    font-size: 60px;
    width: inherit;
`

export {
    NavStyled,
    NavLinksStyled,
    NavLinkStyled,
    Title
}