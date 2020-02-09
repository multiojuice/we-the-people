import styled from 'styled-components'
import colors from '../../constants/colors'

const RegisterOptionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center
`

const RegisterOption = styled.div`
    margin: 3vh 3vh;
    width: 25%;
    height: 30vh;
    border-radius: 16px;
    border: 1px solid ${colors.graphite};
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
`

export {
    RegisterOption,
    RegisterOptionsContainer
}