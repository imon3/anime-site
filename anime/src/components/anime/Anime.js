import React from "react";

class Anime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anime: this.props
    };
    console.log(this.state.anime);
  }

  render() {
    const {
      title,
      genres,
      source,
      image_url,
      synopsis,
      airing_start,
      episodes
    } = this.state.anime.summerAnime;
    return (
      <div className="summer-anime-container">
        <div className="title-section">
          <a href="#">
            <h2 className="title">{title}</h2>
          </a>
          <div className="genre-section">
            {genres.map(item => {
              return <p className="genre">{item.name}</p>;
            })}
          </div>
        </div>
        <div className="body-section">
          <div>
            <img className="anime-img" src={image_url} alt="anime" />
          </div>
          <div>
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
  }
}

export default Anime;
