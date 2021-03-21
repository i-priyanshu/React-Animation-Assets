const initstate = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
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
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
