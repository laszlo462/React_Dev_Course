import React from "react";

const ProjectPage = props => {
  return (
    <div>
      <h1>A thing I've Done</h1>
      This is project number {props.match.params.id}
    </div>
  );
};

export default ProjectPage;
