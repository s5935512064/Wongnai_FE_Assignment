import React, { useState } from "react";
import "./card.css";

const Card = ({ title, description, img, tags, photos, url }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card-container">
      <div className="item1">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className="card-title">
          <a href={url}>
            <h3>{title}</h3>
          </a>
        </div>
        <div className="card-body">
          <p>
            {showMore ? description : `${description.substring(0, 250)}`}
            <button className="btn info" onClick={() => setShowMore(!showMore)}>
              {showMore ? "..Show less" : "Show more.."}
            </button>
          </p>
        </div>
        <div className="card-tag">
          <ul className="no-bullets">
            หมวด
            {tags.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-photo">
          <ul className="no-bullets">
            {photos.slice(1).map((photos, index) => (
              <li key={index}>
                <img src={photos} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
