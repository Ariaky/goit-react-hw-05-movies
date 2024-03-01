import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  padding: 20px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid rgba(190, 190, 190);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: black;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    width: 70px;
    text-align: center;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export const MainMenuItem = styled(NavLink)`
  &.active {
    color: rgb(59, 82, 166);
  }
`;