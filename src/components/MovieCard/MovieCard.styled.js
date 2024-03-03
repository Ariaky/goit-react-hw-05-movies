import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid rgba(190, 190, 190);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: 0.3s ease-in-out;
    }

    @media only screen and (min-width: 768px) {
        max-width: 184px;
    }
`;

export const Img = styled.img`
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 10px 10px 0 0;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const RatingValue = styled.span`
  display: block;
  line-height: 2px;
  font-weight: 500;
`;