import React from "react";
import Spiner from "../Spiner/Spiner";
import Card from "../Card/Card";
import "./post.css";

const Posts = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <div>
          <ul className="no-bullets list-group">
            {data.map((trips) => (
              <li key={trips.eid} className="list-group-item">
                <Card
                  title={trips.title}
                  description={trips.description}
                  url={trips.url}
                  tags={trips.tags}
                  img={trips.photos[0]}
                  photos={trips.photos}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Posts;
