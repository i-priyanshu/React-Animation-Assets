import axios from "axios";
import { populargamesURL } from "../API/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(populargamesURL(), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
