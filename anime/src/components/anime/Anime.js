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
      <div>
        <div>
          <h2>{title}</h2>
          <p>
            {genres.map(item => {
              return <p>{item.name}</p>;
            })}
          </p>
        </div>
        <div>
          <div>
            <img src={image_url} alt="anime" />
          </div>
          <div>
            <div>
              <p>{airing_start}</p>
            </div>
            <div>
              <p>{source}</p>
              <p>{episodes}</p>
            </div>
            <div>{synopsis}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Anime;
