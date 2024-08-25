import React from 'react';
import { HeaderContainer, Logo, Nav, NavItem } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>News Aggregator</Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/preferences">Preferences</NavItem>
       
      </Nav>      
    </HeaderContainer>
  );
};

export default Header;
