import React, { useState } from "react";
import { styled } from "styled-components";

const Layout = styled("div")`
  padding: 24px 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 48px;
`;

const Som = styled("div")`
  height: 74px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled("input")`
  height: 0.2rem;
  display: block;
  transform: rotate(-90deg);
  width: 100%;
  appearance: none;
  border: none;
  background: none;
  position: absolute;
  bottom: 0;
`;

// const 

export default function VerticalSlider() {
  const [volume, setVolume] = useState(50);

  const handleChange = (e) => {
    const { value } = e.target;
    setVolume((prev) => console.log(prev));
  };

  return (
    <Layout>
      <Som>
        <Input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleChange}
        />
      </Som>
    </Layout>
  );
}
