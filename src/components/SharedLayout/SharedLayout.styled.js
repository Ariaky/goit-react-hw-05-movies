import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
  padding: 20px 20px 20px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  border-bottom: 5px groove rgba(152,150,158,0.61);
  font-size: 20px;
  font-weight: 500;
  a {
    color: black;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    width: 80px;
    text-align: center;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }

`;

export const MainMenuItem = styled(NavLink)`
  &.active {
    color: rgb(59, 82, 166);
  }
`;