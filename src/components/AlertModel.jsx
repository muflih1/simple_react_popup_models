import React, { useCallback, useEffect } from "react";
import { Layout, Title } from "../styles/Styles";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/alertModelSlice";

const AlertCoreText = styled("p")`
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  color: #536471;
  font-weight: 400;
`;

const AlertButton = styled("button")`
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  display: flex;
  border-radius: 9999px;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 12px;
  font-family: inherit;
  text-overflow: ellipsis;
  transition-property: background-color;
  transition-duration: 0.2s;
  border: none;
  font-weight: 700;
`;

const AlertButtonPrimary = styled(AlertButton)`
  background-color: rgb(15, 20, 25);
  color: #fff;

  &:hover {
    background-color: rgb(39, 44, 48);
  }
`;

const AlertButtonSecondary = styled(AlertButton)`
  background-color: transparent;
  border: 1px solid rgb(207, 217, 222);
  color: #000;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

export default function AlertModel({
  title = "Alert",
  description,
  primaryText = "Ok",
  secondaryText = "Cancel",
  handleSubmit,
}) {
  const dispatch = useDispatch();
  const { isOpened } = useSelector(state => state.alertModelReducer);

  const clickOutside = useCallback((e) => {
    e.stopPropagation();
    if (!e.target.closest('[data-alert-model]')) {
      dispatch(close());
    };
  }, [dispatch]);

  const handleClose = useCallback((e) => {
    e.stopPropagation();
    dispatch(close());
  }, [dispatch]);

  useEffect(() => {
    if (isOpened) {
      console.log('clicked');
      document.addEventListener('mousedown', clickOutside);
    }

    return () => document.removeEventListener('mousedown', clickOutside);
  }, [isOpened]);

  if (!isOpened) return null;

  return (
    <Layout
      position="fixed"
      top="0"
      left="0"
      width="full"
      height="100vh"
      zIndex="20"
    >
      <Layout
        height="100%"
        width="full"
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
      >
        <Layout
          width="320px"
          maxHeight="80vh"
          backgroundColor="#fff"
          borderRadius="16px"
          padding={{ x: 32, y: 32 }}
          display="flex"
          flexDirection="column"
          data-alert-model
        >
          <Layout margin={{ bottom: "8px" }}>
            <Title
              fontSize="font-size-3"
              fontWeight="bold"
              lineHeight="heading"
            >
              {title}
            </Title>
          </Layout>
          <AlertCoreText>{description}</AlertCoreText>
          <Layout
            display="flex"
            flexDirection="column"
            margin={{ top: "24px", bottom: "-12px" }}
          >
            <AlertButtonPrimary onClick={handleSubmit}>{primaryText}</AlertButtonPrimary>
            <AlertButtonSecondary onClick={handleClose}>{secondaryText}</AlertButtonSecondary>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
