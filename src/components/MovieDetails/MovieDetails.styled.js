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
    text-align: left;
    font-size: 22px;
    font-weight: 500;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;

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