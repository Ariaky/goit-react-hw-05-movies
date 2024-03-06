import styled from 'styled-components';

export const CastMainWrapper = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
`

export const CastWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(190, 190, 190);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
    max-width: 220px;

    img {
        height: auto;
        width: 100%;
        object-fit: cover;
        margin-bottom: 10px;
        border-radius: 10px 10px 0 0;
    }

    p {
        margin: 0 10px 10px 10px;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
    }
`