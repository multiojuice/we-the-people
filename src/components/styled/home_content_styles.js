import styled from 'styled-components'
import colors from '../../constants/colors';
//import backgroundImage from '../../assets/sea-ocean-horizon-cloud-sky-sunrise-14926-pxhere.com.jpg'

//background-image: url(${backgroundImage});
const ContentSlogan = styled.div`
    box-sizing: border-box;
    margin: 20vh 5vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
    background-color: inherit;
`

const Slogan = styled.h2`
    font-size: 9vh;
    font-family: 'EB Garamond', serif;
    color: black;
`

const ContentNotes = styled.div`
    display: flex;
    background-color: inherit;
    height: 70vh;
    align-items: center;
    justify-content: space-evenly;
    margin: 25vh 0em;
    margin-left: 2vh;
`

const Note = styled.div`
    border-radius: 16px;
    border: 1px solid ${colors.graphite};
    background-color: ${props => props.color};
    width: 95%;
    height: 60vh;
    text-align: center;
`

const NoteTitle = styled.h1`
    font-size: 4.5vh;
    margin: 7vh 0vh;
    margin-bottom: 2vh;
    font-family: 'Anton', sans-serif;
`

const NoteInfo = styled.p`
    font-size: 3.4vh;
    margin: 2em 1em;
    font-weight: 300;
`

const ContentBottom = styled.div`
    box-sizing: border-box;
    margin: 15% 0;
    margin-bottom: 15vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.navy};
    height: 50vh;
`

const ContentBottomTitle = styled.h1`
    font-size: 4vh;
    font-family: 'Andale Mono', sans-serif;
    color: white;
`

export {
    ContentSlogan,
    Slogan,
    ContentNotes,
    Note,
    NoteTitle,
    NoteInfo,
    ContentBottom,
    ContentBottomTitle
}