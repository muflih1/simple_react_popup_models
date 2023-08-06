import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { CoreButtonPrimary, CoreText, Layout } from "../styles/Styles";

const Input = styled("input")`
  display: none;
`;

const Wrapper = styled("button")`
  width: 136px;
  height: 136px;
  border-radius: 9999px;
  background-color: #e4e6eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;

  svg {
    transition: transform 0.2s;
    fill: #55565d;
  }
`;

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  ${Wrapper} {
    svg {
      transform: ${({ dragged }) => dragged && "translateY(10px)"};
    }
  }
`;

const LoaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const Spinner = styled("div")`
  height: 64px;
  width: 64px;
  border-radius: 9999px;
  border: 8px solid #000;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite alternate;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const VideoPreview = styled("video")`
  display: block;
  width: 100%;
  margin-bottom: 24px;
`;

export default function InputFile({ name, handleDrop, onChange, file, deleteVideo }) {
  const [dragged, setDragged] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current.click();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnter = () => setDragged(true);

  const onDragLeave = () => setDragged(false);

  if (file) return <button onClick={deleteVideo}>Delete Video</button>;

  return (
    <Container
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      dragged={dragged}
    >
      <Input type="file" name={name} ref={inputRef} value={file} onChange={onChange} />
      <Wrapper onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M11 15h2V9h3l-4-5-4 5h3z"></path>
          <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
        </svg>
      </Wrapper>
      <Layout margin={{ top: "8px", bottom: "8px" }}>
        <CoreText type={"h2"} fontSize="font-size-5" fontWeight="semibold">
          Drag and drop video files to upload
        </CoreText>
      </Layout>
      <CoreButtonPrimary onClick={handleClick}>Select file</CoreButtonPrimary>
    </Container>
  );
}
