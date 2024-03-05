import styled from 'styled-components';

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

`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;

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
    }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Rating = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Description = styled.ul`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  `;
