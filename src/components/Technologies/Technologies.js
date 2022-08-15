import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id ="tech">
        <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I have a range of experience with web development from back-end to UI and UX design.
        </SectionText>
        <List>
          <ListItem>
            <DiFirebase size = "3rem"/>
            <ListContainer>
              <ListTitle>Front-end</ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiReact size = "3rem"/>
            <ListContainer>
              <ListTitle>Back-end</ListTitle>
              <ListParagraph>
                Experience with <br />
                Node and databases
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiZend size = "3rem"/>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                tools like Figma
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
    </Section>
  </div>
);

export default Technologies;
