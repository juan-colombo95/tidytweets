// @flow

import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Link } from "@reach/router";

import { LogOut } from "components";

import { FormattedMessage } from "react-intl";

import "./styles.scss";

/**
 * @function Header
 * @returns React.Node
 * @exports Header
 */

const Header = (): React.Node => {
  return (
    <header className="Header">
      <Link to="/">
        <h1><FormattedMessage id="global.appName"/></h1>
      </Link>
      <LogOut />
    </header>
  );
};

export default hot(Header);
