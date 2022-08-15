import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          The Portfolios Place,<br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this website is to help people build the coolest apps because my goal is to spread knowledge around the world
        </SectionText>
        <Button onClick={() => window.location = 'http://ayan-gpt3.netlify.app'}>Other projects</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;