import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.light};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          display: inline-block;
          animation: 0.1s ${Spin} linear 5s;
          font-size: 60px;
        `}
        role="img"
        aria-label="logo"
      >
        🌭
      </span>
    </header>
  );
};

export default NavBar;
