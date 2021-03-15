import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../API/api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });
  const ScreenShotData = await axios.get(gameScreenShotsURL(id), {
    params: {
      key: "9c9c466b87b54e058f94d75b083c6cd8",
    },
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: ScreenShotData.data,
    },
  });
};
