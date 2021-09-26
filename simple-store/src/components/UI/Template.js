import React from "react";

const Template = (props) => {
  const { content } = props;
  return (
    <div>
      <div>Header</div>
      <div>{content}</div>
      <div>Footer</div>
    </div>
  );
};

export default Template;
