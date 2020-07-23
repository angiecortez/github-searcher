import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.input`
  border: 2px solid lightgray;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  &:active,
  &:focus {
    border: 2px solid pink;
  }
`;

const Input = ({ value, onChange, onKeyPress }) => (
  <InputWrapper
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder="Search or jump to ...."
    type={'text'}
    autoComplete="off"
  />
);
Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default Input;
