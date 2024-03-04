import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

`;

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
    outline: 0;  
    min-width: 240px;
`;

export const Button = styled.button`
    color: black;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
    width: 100px;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover,
    &:focus {
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
        border: 1px solid gray;
    }
`;