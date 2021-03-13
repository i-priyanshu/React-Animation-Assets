import axios from "axios";
import { populargamesURL, upcomingGamesURL, newGamesURL } from "../API/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(populargamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });
  const newgamesData = await axios.get(upcomingGamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });
  const upcomingrData = await axios.get(newGamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingrData.data.results,
      newGames: newgamesData.data.results,
    },
  });
};
