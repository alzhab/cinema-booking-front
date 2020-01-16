import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Photos.scss";

const Photos = () => {
  return (
    <div className="movie__photos">
      <h2>photos</h2>
      <ScrollContainer className="movie__photos-list scroll-container">
        <div className="movie__photo">
          <img
            src="https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png"
            alt=""
          />
        </div>
        <div className="movie__photo">
          <img
            src="https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png"
            alt=""
          />
        </div>
        <div className="movie__photo">
          <img
            src="https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png"
            alt=""
          />
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Photos;
