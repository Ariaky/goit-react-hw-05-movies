import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;

    @media only screen and (min-width: 768px) {
        flex-direction: column;
}
`;

export const MovieTitle = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    font-size: 22px;
    font-weight: 500;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;
    border-bottom: 5px groove rgba(152,150,158,0.61);

    @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    min-width: 100%;
    
    @media only screen and (min-width: 768px) {
        min-width: 226px;
        margin-bottom: 15px;
    }
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

export const RatingValue = styled.span`
    font-size: 18px;
    font-weight: 500;
`;
export const Overview = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    margin-bottom: 15px;
`
export const Description = styled.ul`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-bottom: 15px;
    }

  `;

export const TitleInfo = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 6px;
`

export const AddInfo = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
    padding: 20px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    border-bottom: 5px groove rgba(152,150,158,0.61);
    font-size: 20px;
    font-weight: 500;
`

export const AddInfoItem = styled(NavLink)`
    color: black;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    min-width: 70px;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
    }

    &.active {
        color: rgb(59, 82, 166);
    }
`