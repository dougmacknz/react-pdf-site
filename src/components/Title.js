import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
  padding: 0px 32px;
  position: relative;
  border-left: ${({ theme }) => `2px solid ${theme.red}`};

  &::after {
    top: calc(50% - 8px);
    left: -8px;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: ${({ theme }) => `8px solid ${theme.red}`};
  }
`;

const Title = styled(Heading)`
  margin: 0;
`;

const SubHeading = Paragraph.extend`
  margin: 0px;
`;

export default () => (
  <Wrapper>
    <Title level={1}>React-pdf</Title>
    <SubHeading>
      React renderer for creating PDF files on the browser, mobile and server.
    </SubHeading>
  </Wrapper>
);
