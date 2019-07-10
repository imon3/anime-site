import React from "react";
import axios from "axios";
import Anime from "./Anime";

const url = `https://api.jikan.moe/v3`;

class SummerAnime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summerAnime: [],
      season_name: "",
      season_year: 0
    };
  }

  componentDidMount() {
    axios
      .get(`${url}/season/2019/summer`)
      .then(res => {
        this.setState({
          summerAnime: res.data.anime,
          season_name: res.data.season_name,
          season_year: res.data.season_year
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.summerAnime.map((sumAnime, index) => {
          return (
            <Anime
              key={index}
              summerAnime={sumAnime}
              season_name={this.state.season_name}
              season_year={this.state.season_year}
            />
          );
        })}
      </div>
    );
  }
}

export default SummerAnime;
