import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomHeader = styled.header`
  display: flex;
  gap: 40px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 20px 0 20px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  height: 35px;
  padding-bottom: 10px;
`;

export const LinkContainer = styled.nav`
  display: flex;
  gap: 20px;
  padding-top: 15px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: #565656;
  font-size: 0.75rem;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  border-bottom: 4px solid transparent;
  &.active {
    border-bottom: 4px solid #fc5624;
  }
`;
