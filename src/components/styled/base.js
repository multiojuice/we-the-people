import styled from 'styled-components';
import colors from '../../constants/colors';

export const AppWrapper = styled.div`
    position: absolute;
    top: 0; left: 0;
    height: 100%;
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

export const RoundedSubmitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
`;

export const RoundedSubmitTitle = styled.p`
    font-weight: 700;
    color: white;
    margin: 0 14px;
`;

//    width: 100%;


export const RoundedSubmitInput = styled.input`
    margin-top: 8px;
    ::placeholder {
        color: ${colors.dark_gray};
    }
    color: white;
    border-radius: 16px;
    border: 1px solid ${colors.graphite};
    padding: 10px 14px;
    background-color: inherit;
    outline: white;
    width: 100%;
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
    width: 100%;
    outline: white;
`;

