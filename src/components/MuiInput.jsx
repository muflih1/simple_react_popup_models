import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import TextareaAutoSize from "react-textarea-autosize"
import { CoreText, Layout } from '../styles/Styles';

const Wrapper = styled('div')`
  border-radius: 4px;
  border: 1px solid ${({ isFocused }) => isFocused ? "blue" : "#cccccc"};
  padding: 0 12px 11px;
  margin-bottom: 24px;

  &:hover {
    border-color: ${({ isFocused }) => !isFocused && "#909090"};
  }
`;

const Label = styled('div')`
  font-size: 13px;
  color: ${({ isFocused }) => isFocused ? "#065fd4" : "#606060"};
  margin: 8px 0 3px 0;
`;

const TextArea = styled(TextareaAutoSize)`
  border: none;
  resize: none;
  display: block;
  width: 100%;
  font-size: 15px;
  font-family: inherit;
  line-height: 20px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const Tags = styled('div')`
  display: flex;
  margin: 0 -5px;
  flex-wrap: wrap;
  min-width: 100%;

  & > * {
    padding: 0 5px;
  }
`;

const Tag = styled('div')`
  min-height: 36px;
  min-width: 36px;
  border-radius: 9999px;
  padding: 0 16px;
  background-color: #e4e6eb;
  color: #050505;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  
`;

export default function MuiInput({ label, handleChange, value, minRows, currLength, maxLength, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => setIsFocused(false);

  return (
    <Wrapper isFocused={isFocused} onClick={() => textareaRef.current.focus()}>
      <Label isFocused={isFocused}>{label}</Label>
      <TextArea ref={textareaRef} minRows={minRows} onChange={handleChange} value={value} onFocus={onFocus} onBlur={onBlur} {...rest}  />
      {maxLength && (
        <Layout display="flex" justifyContent="flex-end">
          <CoreText type={'p'}>{currLength}/{maxLength}</CoreText>
        </Layout>
      )}
    </Wrapper>
  )
}
