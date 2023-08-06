import React from 'react'
import ReactDom from "react-dom";

export default function Portal({ children }) {
  return ReactDom.createPortal(
    <div>{children}</div>,
    document.body,
  );
}
