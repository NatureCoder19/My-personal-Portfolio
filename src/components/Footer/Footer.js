import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href = "mailto:ayanbordia321@gmail.com">ayanbordia321@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>Innovating one roject at a time</Slogan>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
