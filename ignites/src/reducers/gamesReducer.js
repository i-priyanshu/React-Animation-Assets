const initstate = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gameReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComing: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
