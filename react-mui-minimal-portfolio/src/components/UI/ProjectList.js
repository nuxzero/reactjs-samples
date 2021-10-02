import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div>
      projects
      {featureProject()}
      {projects()}
    </div>
  );
};

const featureProject = () => {
  return <Project />;
};
const projects = () =>
  [1, 2, 3].map((e) => {
    return <Project key={e} />;
  });

export default ProjectList;
