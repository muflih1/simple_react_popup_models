import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
`;

export const AspectRatio = styled('div')`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const AspectSpacer = styled('div')`
  padding-bottom: 56.25%;
  width: 100%;
  background-color: #e4e6eb;
`;

export const Img = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
`;

export default function Thumbnile() {
  return (
    <Container to="/">
      <AspectRatio>
        <AspectSpacer />
        <Img src='' alt='' />
      </AspectRatio>
    </Container>
  )
}
