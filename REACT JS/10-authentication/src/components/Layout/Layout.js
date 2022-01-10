import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
