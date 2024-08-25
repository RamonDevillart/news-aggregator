import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #2F2E41;
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
