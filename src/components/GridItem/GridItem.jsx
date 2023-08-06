import React from 'react'
import styled from 'styled-components'
import Thumbnile from './Thumbnile';
import Details from './Details';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`;

export default function GridItem() {
  return (
    <Container>
      <Thumbnile />
      <Details />
    </Container>
  )
}
