import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const Img = styled.img`
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
    
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