import axios from "axios";
import {
  populargamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../API/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(populargamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });
  const newgamesData = await axios.get(newGamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });
  const upcomingData = await axios.get(upcomingGamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newgamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
