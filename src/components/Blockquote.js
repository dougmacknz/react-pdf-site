import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
  padding: 8px 30px;
  margin-bottom: 40px;
  border-radius: 0 6px 6px 0;
  background-color: ${({ theme }) => theme.gray3};
  border-left: ${({ theme }) => `2px solid ${theme.red}`};

  p {
    margin: 0px;
  }
`;

export default Blockquote;
