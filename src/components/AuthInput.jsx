import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const Container = styled("div")`
  margin-bottom: 24px;
  border: 1px solid ${({ focused }) => focused ? "#065fd4" : "rgb(207, 217, 222)"};
  border-radius: 4px;
  position: relative;
  padding: 12px 12px 0;
  height: 56px;
  box-shadow: ${({ focused }) => focused && "0 0 0 1px #065fd4"};
  
  &:hover {
    border-color: ${({ focused }) => !focused && "#949494"};
  }
`;

const Label = styled("span")`
  display: block;
  font-size: ${({ focused, valid }) => (focused || valid) ? "small" : "1.125rem"};
  transition: all .1s linear;
  position: absolute;
  top: 15px;
  pointer-events: none;
  left: 12px;
  transform: ${({ focused, valid }) => (focused || valid) && `translateY(-12px)`};
  color: ${({ focused }) => focused ? "#065fd4" : "rgb(83, 100, 113)"};
`;

const Input = styled("input")`
  border: none;
  font-family: inherit;
  display: block;
  width: 100%;
  font-size: 15px;
  padding-top: 12px;

  &:focus {
    outline: none;
  }
`;

export default function AuthInput({ type, name, label, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value.length > 0 ? setValid(true) : setValid(false);
  });

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  return (
    <Container focused={focused} onClick={() => inputRef.current.focus()}>
      <Label focused={focused} valid={valid}>{label}</Label>
      <Input
        focused={focused}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
      />
    </Container>
  );
}
