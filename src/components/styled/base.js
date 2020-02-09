import styled from 'styled-components';
import colors from '../../constants/colors';

export const AppWrapper = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    background-color: white;
    font-family: 'Rubik', sans-serif;
`;

export const RandomDiv = styled.div`
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60%;
    justify-content: center;
`;

export const FlexCol = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-flow: column;
    margin: 4vh 0vh;
    height: 60%;
`;

export const RoundedSubmitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
`;

export const RoundedSubmitTitle = styled.p`
    font-weight: 700;
    color: black;
    margin: 0 14px;
    margin-top: 14px;
`;

//    width: 100%;


export const RoundedSubmitInput = styled.input`
    margin-top: 8px;
    ::placeholder {
        color: ${colors.dark_gray};
    }
    color: black;
    border-radius: 16px;
    border: 1px solid ${colors.graphite};
    padding: 10px 14px;
    background-color: inherit;
    outline: black;
    width: 40%;
    box-sizing: border-box;
`;

export const RoundedSubmitButton = styled.button`
    margin-top: 8px;
    color: white;
    background-color: ${colors.graphite};
    border-radius: 16px;
    font-weight: 700;
    border: none;
    height: 34px;
    width: 20%;
    outline: white;
    margin-top: 16px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
`

export {
    Main 
}