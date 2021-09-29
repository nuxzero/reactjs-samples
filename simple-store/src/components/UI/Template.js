import React from "react";
import PropTypes from "prop-types";
import TopBar from "./topBar/TopBar";

const Template = ({ topBar = defaultTopBar, content }) => {
  return (
    <div>
      {topBar}
      <div>{content}</div>
      <div>Footer</div>
    </div>
  );
};

const defaultTopBar = <TopBar />;

Template.propTypes = {
  content: PropTypes.object,
};

export default Template;
