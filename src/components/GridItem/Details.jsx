import React from 'react'
import { Link } from 'react-router-dom';
import { AspectRatio, Img } from './Thumbnile';
import { styled } from 'styled-components';

const Container = styled('div')`
  margin-top: 12px;
  display: flex;
`;

const Avater = styled(Link)`
  flex: 0 0 40px;
  display: block;
  margin-right: 0.725rem;
  border-radius: 9999px;
  overflow: hidden;
`;

const AspectSpacer = styled('div')`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-color: #e4e6eb;
`;

export default function Details() {
  return (
    <Container>
      <Avater>
        <AspectRatio>
          <AspectSpacer />
          <Img />
        </AspectRatio>
      </Avater>
    </Container>
  )
}
