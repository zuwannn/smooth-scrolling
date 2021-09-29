import React from "react";

import "./Section.css";

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="left-container">
        <div className="block"></div>
      </div>

      <div className="right-container">
        <div className="container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            quibusdam quisquam ipsam officiis asperiores pariatur unde sed amet
            illo recusandae enim repudiandae modi magni voluptate voluptatem,
            vero nesciunt ea, ab nobis molestias tempore optio laborum. Error
            tempora est, officia ea voluptatum quo voluptatibus suscipit non
            dignissimos aliquam nemo officiis rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section