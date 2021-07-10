import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Sean Black <br />
        Web Developer
      </SectionTitle>
      <SectionText>
        Utilising technologies to build innovative, user focused Websites, and
        Web apps.
      </SectionText>
      <Button
        onClick={() =>
          window.location  = "mailto:MailSeanBlack@gmail.com " 
        }
      >
        Contact
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;