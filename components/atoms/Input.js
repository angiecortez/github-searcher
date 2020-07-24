import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.input`
  border: none;
  width: 270px;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background: hsla(0, 0%, 100%, 0.125);
  color: #fff;
  margin: 0 10px;
  &:active,
  &:focus {
    background-color: #ffffff;
    color: #24292e;
    box-shadow: none;
    transition: 0.1s ease-in-out;
    width: 500px;
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
