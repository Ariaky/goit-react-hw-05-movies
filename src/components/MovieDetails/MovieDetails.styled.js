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

export const Title = styled.h2`
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
    height: 500px;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        height: 350px;
    }

    @media only screen and (min-width: 1280px) {
        height: 500px;
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
