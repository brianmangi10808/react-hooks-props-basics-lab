import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {/* Render GitHub and LinkedIn links */}
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
