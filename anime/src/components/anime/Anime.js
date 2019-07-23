import React from "react";

const Anime = props => {
  const {
    title,
    genres,
    source,
    image_url,
    synopsis,
    airing_start,
    episodes
  } = props.summerAnime;

  return (
    <div className="summer-anime-container">
      <div className="title-section">
        <h2 className="title">{title}</h2>
        <div className="genre-section">
          {genres.map((item, index) => {
            return (
              <p key={index} className="genre">
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="body-section">
        <div>
          <img className="anime-img" src={image_url} alt="anime" />
        </div>
        <div className="right-body-section">
          <div>
            <p className="air-date">{airing_start}</p>
          </div>
          <div>
            <p className="source">{source}</p>
            <p className="episodes">{episodes}</p>
          </div>
          <div className="synopsis">{synopsis}</div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
