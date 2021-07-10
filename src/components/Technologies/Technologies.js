import React from 'react';
import { DiCss3, DiFirebase, DiMongodb, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
		<br/>
    <SectionTitle>Technologies |</SectionTitle>
    <SectionText>
      I am a JavaScript addict, and I am continuously striving to go deeper into
      the language, and it's ecosystem.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced With <br />
            React.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Node.Js & Mongo DB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>Ui/Ux</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Css Tailwind Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
