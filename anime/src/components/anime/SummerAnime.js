import React from "react";
import axios from "axios";
import Anime from "./Anime";
import "./summerAnime.scss";
import Pagination from "../pagination/Pagination";

const url = `https://api.jikan.moe/v3`;

class SummerAnime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summer_anime: [],
      season_name: "",
      season_year: 0,
      summer_anime_amount: 1,
      current_page: 1,
      anime_per_page: 20
    };
  }

  componentDidMount() {
    axios
      .get(`${url}/season/2019/summer`)
      .then(res => {
        this.setState({
          summer_anime: res.data.anime,
          season_name: res.data.season_name,
          season_year: res.data.season_year,
          summer_anime_amount: res.data.anime.length
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  paginate = page_number => {
    this.setState({
      current_page: page_number
    });
  };

  render() {
    const {
      anime_per_page,
      summer_anime_amount,
      season_name,
      season_year,
      summer_anime,
      current_page
    } = this.state;

    const indexOfLastSummerAnime = current_page * anime_per_page;
    const indexOfFirstSummerAnime = indexOfLastSummerAnime - anime_per_page;
    const summerAnimeOnPage = summer_anime.slice(
      indexOfFirstSummerAnime,
      indexOfLastSummerAnime
    );

    return (
      <div className="summer-container">
        <div id="summer-anime">
          {summerAnimeOnPage.map((sumAnime, index) => {
            return (
              <Anime
                key={index}
                summerAnime={sumAnime}
                season_name={season_name}
                season_year={season_year}
              />
            );
          })}
          <Pagination
            animePerPage={anime_per_page}
            summerAnimeAmount={summer_anime_amount}
            paginate={this.paginate}
          />
        </div>
      </div>
    );
  }
}

export default SummerAnime;
