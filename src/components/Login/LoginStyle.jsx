import styled from 'styled-components';

export const LoginSection = styled.section`
    width: 100%;
    max-width: 420px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    background-color: rgba(0,0,0,0.4);
    margin:auto;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
`;

export const LoginInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    padding: 0.25rem;
    border-radius: 0.5rem;
`;

export const LoginButton = styled.button`
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    padding: 0.25rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem;
`;

export const LoginLabel = styled.label`
    margin-top: 1rem;
`;


export const LoginP = styled.p`
    .offscreen {
        position: absolute;
        left: -9999px;
    };
    .errmsg {
        background-color: lightpink;
        color: firebrick;
        font-weight: bold;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    };
    .invalid {
        color: red;
        margin-left: 0.25rem;
    };
    .hide {
        display: none;
    };
    
    .valid {
        color: limegreen;
        margin-left: 0.25rem;
    }
`;

