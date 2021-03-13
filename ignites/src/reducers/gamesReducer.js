const initstate = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gameReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

export default gameReducer;
