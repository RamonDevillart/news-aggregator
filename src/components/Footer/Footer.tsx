import React from 'react';
import { FooterContainer, FooterLink } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLink href="/terms">Terms of Service</FooterLink>
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/contact">Contact Us</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
