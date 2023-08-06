import React from "react";
import { Layout } from "../styles/Styles";
import Portal from "../components/Portal";
import CreateVideoModel from "../components/CreateVideoModel";
import AuthModel from "../components/AuthModel";
import GridItem from "../components/GridItem/GridItem";
import { styled } from "styled-components";

const Container = styled('div')`
  margin: 0 1.925rem;
`;

const ScItems = styled('div')`
  display: flex;
  min-width: 100%;
  flex-wrap: wrap;
  margin: 0 -5px;

  & > * {
    flex: 1 0 auto;
    width: 300px;
    padding: 0 5px;
  }
`;

export default function Home() {
  const placeholders = Array.from(new Array(6), (_, i) => 1 + i);

  return (
    <Layout margin={{ top: "80px" }}>
      <Container>
        <ScItems>
          {placeholders.map(() => (
            <GridItem />
          ))}
        </ScItems>
      </Container>
      <Portal>
        <CreateVideoModel />
      </Portal>
      <Portal>
        <AuthModel />
      </Portal>
    </Layout>
  );
}
