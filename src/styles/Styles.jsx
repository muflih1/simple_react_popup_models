import React from "react";
import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const FlexStyles = css`
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const LayoutStyles = css`
  ${FlexStyles}
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => {
    const { x, y } = padding ?? "";
    if (x && y) {
      return `${y}px ${x}px`;
    } else if (y) {
      return `${y}px 0`;
    } else if (x) {
      return `0 ${x}px`;
    }
  }};
  padding-bottom: ${({ padding }) => padding?.bottom};
  padding-left: ${({ padding }) => padding?.left};
  padding-top: ${({ padding }) => padding?.top};
  padding-right: ${({ padding }) => padding?.right};
  margin: ${({ margin }) => {
    const { x, y } = margin ?? "";
    if (x && y) {
      return `${y}px ${x}px`;
    } else if (y) {
      return `${y}px 0`;
    } else if (x) {
      return `0 ${x}px`;
    }
  }};
  margin-bottom: ${({ margin }) => margin?.bottom};
  margin-left: ${({ margin }) => margin?.left};
  margin-top: ${({ margin }) => margin?.top};
  margin-right: ${({ margin }) => margin?.right};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: ${({ zIndex }) => zIndex};
  width: ${({ width }) => {
    switch(width) {
      case "full":
        return "100%";
      default:
        return width;
    }
  }};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: ${({ overflow }) => overflow};
  overflow-y: ${({ overflowY }) => overflowY};

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 4px solid transparent;
    background-color: #ccc;
    background-clip: content-box;
  }
`;

const typography = css`
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "font-size-1":
        return "54px";
      case "font-size-2":
        return "36px";
      case "font-size-3":
        return "24px";
      case "font-size-4":
        return "18px";
      case "font-size-5":
        return "14px";
      case "font-size-6":
        return "13px";
      case "font-size-7":
        return "12px";
      default:
        return "13px";
    }
  }};
  line-height: ${({ lineHeight }) => {
    switch (lineHeight) {
      case "heading":
        return 1.2;
      default:
        return 1.5;
    }
  }};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case "bold":
        return 700;
      case "semibold":
        return 600;
      case "normal":
        return 400;
      default:
        return 400;
    }
  }};
  text-overflow: ${({ ellipsis }) => ellipsis && "ellipsis"};
  overflow: ${({ ellipsis }) => ellipsis && "hidden"};
  white-space: ${({ ellipsis }) => ellipsis && "nowrap"};
  text-align: ${({ centered }) => centered && "center"};
`;

export const CoreText = styled(({type, ...rest}) => React.createElement(type, rest))`
  ${typography};
`;

export const CoreTitle = styled(CoreText)``;

export const Layout = styled("div")`
  ${LayoutStyles};
`;

export const TitleStyles = css`
  line-height: ${({ lineHeight }) => {
    switch (lineHeight) {
      case "heading":
        return 1.2;
      default:
        return 1.5;
    }
  }};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case "bold":
        return 700;
      case "semibold":
        return 600;
      case "normal":
        return 400;
      default:
        return 400;
    }
  }};
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "font-size-1":
        return "54px";
      case "font-size-2":
        return "36px";
      case "font-size-3":
        return "24px";
      case "font-size-4":
        return "18px";
      case "font-size-5":
        return "14px";
      case "font-size-6":
        return "13px";
      case "font-size-7":
        return "12px";
      default:
        return "13px";
    }
  }};
`;

export const Title = styled("h3")`
  ${TitleStyles}
`;

const ButtonStyles = css`
  min-height: 36px;
  min-width: 36px;
  width: ${({ width }) => {
    switch(width) {
      case "full":
        return "100%";
      default:
        return "";
    };
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 600;
  padding: 0 16px;
  user-select: none;
  white-space: nowrap;
`;

const PrimaryButtonStyles = css`
  background-color: #7528da;
  color: #fff;
`;

const CoreLinkButton = styled(Link)`
  ${ButtonStyles};
`;

export const CoreLinkButtonPrimary = styled(CoreLinkButton)`
  ${PrimaryButtonStyles}
`;

const InputStyles = css`
  height: 40px;
  display: block;
  width: 100%;
  border: 2px solid rgba(0,0,0,0.1);
  background-color: rgba(0,0,0,0.1);
  transition-property: border, background-color;
  transition-duration: 100ms;
  transition-timing-function: ease-in;
  background-clip: padding-box;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #5b0a9c;
    background-color: #fff;
  }
`;

export const ScInput = styled('input')`
  ${InputStyles}
`;

const CoreButton = styled('button')`
  ${ButtonStyles}
`;

export const CoreIconButton = styled("button")`
  transition-duration: .2s;
  transition-property: background-color;
  min-height: 36px;
  min-width: 36px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(15, 20, 25, .1);
  }

  svg {
    display: block;
  }
`;

export const CoreButtonPrimary = styled(CoreButton)`
  ${PrimaryButtonStyles}

  &:disabled {
    cursor: not-allowed;
    background-color: #ececec;
    color: #ccc;
  }
`;