import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
    color: black;
    
    padding: 10px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid rgba(190, 190, 190);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-size: 20px;
    text-align: center;

    @media only screen and (min-width: 768px) {
        max-width: 184px;
    }


`