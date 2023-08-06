import React from "react";
import { CoreButtonPrimary, Layout, ScInput } from "../styles/Styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open } from "../features/createVideoModelSlice";
import { open as authModelOpen } from "../features/authModelSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  
  return (
    <Layout
      position="fixed"
      top={0}
      width="full"
      zIndex={10}
      height={"56px"}
      backgroundColor="#ffff"
      boxShadow="0 1px 2px rgba(0,0,0,0.13), 0 0 2px rgba(0,0,0,0.08)"
      display="flex"
      alignItems="stretch"
    >
      <Layout
        margin={{ left: "16px" }}
        display="flex"
        alignItems="center"
        flexGrow="1"
        flexShrink="2"
        width="full"
      >
        <Link to="/">LOGO</Link>
      </Layout>
      <Layout flexGrow="2" display="flex" flexShrink="1" width="full" justifyContent="center" alignItems="center">
        <Layout width="680px">
          <ScInput type="search" placeholder="Search" />
        </Layout>
      </Layout>
      <Layout margin={{ right: "16px" }}
        display="flex"
        alignItems="center"
        flexGrow="1"
        flexShrink="2"
        width="full"
        justifyContent="flex-end"
        >
        <CoreButtonPrimary onClick={() => dispatch(authModelOpen("Sign in"))}>Sign in</CoreButtonPrimary>
        <CoreButtonPrimary onClick={() => dispatch(authModelOpen("Sign up"))}>Sign up</CoreButtonPrimary>
        <CoreButtonPrimary onClick={() => dispatch(open())}>Create video</CoreButtonPrimary>
      </Layout>
    </Layout>
  );
}
