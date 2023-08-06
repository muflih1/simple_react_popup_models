import React, { useEffect, useRef } from "react";
import {
  CoreButtonPrimary,
  CoreIconButton,
  CoreTitle,
  Layout,
} from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { changeTab, close } from "../features/authModelSlice";
import { styled } from "styled-components";
import AuthInput from "./AuthInput";
import Times from "./icons/Times";

const Tabs = styled("div")`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled("button")`
  font-size: 15px;
  font-weight: 600;
  padding: 0 18px;
  position: relative;
  background: none;
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: ${({ active }) => (active ? "#065fd4" : "#030303")};

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 2px;
    left: 18px;
    right: 18px;
    background-color: ${({ active }) => active && "#065fd4"};
  }
`;

export default function AuthModel() {
  const dispatch = useDispatch();
  const { isOpened, tab } = useSelector((state) => state.authModelReducer);

  const emailRef = useRef(null);
  const firstNameRef = useRef(null);

  useEffect(() => {
    if (tab && tab === "Sign in") {
      emailRef.current?.focus();
    } else if (tab && tab === "Sign up") {
      firstNameRef.current?.focus();
    }

    function clickOutside(e) {
      e.stopPropagation();
      if (!e.target.closest('[data-auth-model]')) {
        dispatch(close());
      }
    }

    document.addEventListener('mousedown', clickOutside);

    return () => {
      emailRef.current?.blur();
      firstNameRef.current?.blur();
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [tab, isOpened]);

  if (!isOpened) return null;

  return (
    <Layout
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      minHeight="100vh"
      zIndex="20"
    >
      <Layout
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        minHeight="100vh"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.4)"
        zIndex="1"
      />
      <Layout
        height="100%"
        width="full"
        padding={{ x: 24, y: 24 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="2"
        position="absolute"
        top="0"
        left="0"
        overflowY="auto"
      >
        <Layout display="flex" justifyContent="center">
          <Layout
            width="500px"
            backgroundColor="#fff"
            borderRadius="16px"
            position="relative"
            data-auth-model
          >
            <Layout
              display="flex"
              flexDirection="column"
              padding={{ x: 30, y: 30 }}
            >
              <CoreTitle
                centered={true}
                type={"h4"}
                fontSize="font-size-3"
                fontWeight="bold"
              >
                {tab === "Sign in"
                  ? "Sign in to YouTube"
                  : "Join YouTube today"}
              </CoreTitle>
              <Layout margin={{ top: "12px" }}>
                <Tabs>
                  <Tab
                    active={tab === "Sign in"}
                    onClick={() => dispatch(changeTab("Sign in"))}
                  >
                    Sign in
                  </Tab>
                  <Tab
                    active={tab === "Sign up"}
                    onClick={() => dispatch(changeTab("Sign up"))}
                  >
                    Sign up
                  </Tab>
                </Tabs>
              </Layout>
              <Layout
                display="flex"
                flexDirection="column"
                margin={{ top: "24px" }}
              >
                <form noValidate>
                  {tab === "Sign in" && (
                    <div>
                      <AuthInput type={"email"} label={"Email"} />
                      <AuthInput type={"password"} label={"Password"} />
                    </div>
                  )}

                  {tab === "Sign up" && (
                    <div>
                      <AuthInput type={"text"} label={"First name"} />
                      <AuthInput type={"text"} label={"Last name"} />
                      <AuthInput type={"email"} label={"Email"} />
                      <AuthInput type={"password"} label={"Password"} />
                    </div>
                  )}
                  <CoreButtonPrimary width="full">
                    {tab === "Sign in" && "Sign in"}{" "}
                    {tab === "Sign up" && "Sign up"}
                  </CoreButtonPrimary>
                </form>
              </Layout>
            </Layout>
            <Layout position="absolute" top="12px" right="12px">
              <CoreIconButton onClick={() => dispatch(close())}>
                <Times fill={"#0f1419"} />
              </CoreIconButton>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
