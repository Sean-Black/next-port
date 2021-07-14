import React from 'react';
import { DiCss3, DiFirebase, DiMongodb, DiNodejs, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
		<br/>
    <SectionTitle>Technologies |</SectionTitle>
    <SectionText>
      I am always looking for new opportunities. Whether Working with PHP & WordPress, or Front end JavaScript libraries, or Frameworks.
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
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Php & WordPress, <br/>
						Node, Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>Ui/Ux</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Css Tailwind Material-UI Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
