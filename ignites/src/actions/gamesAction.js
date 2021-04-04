import axios from "axios";
import { key } from "../API/key";
import {
  populargamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../API/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(populargamesURL(), {
    params: {
      key: `${key}`,
    },
  });
  const newgamesData = await axios.get(newGamesURL(), {
    params: {
      key: `${key}`,
    },
  });
  const upcomingData = await axios.get(upcomingGamesURL(), {
    params: {
      key: `${key}`,
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
