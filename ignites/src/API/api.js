const Base_URL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const LastYear = 2019;
//Popular games
const popularGames = `games?dates=${LastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?dates=${lastYear},${currentDate}&page_size=12`;

export const upcomingGamesURL = () => `${Base_URL}${upcomingGames}`;
export const populargamesURL = () => `${Base_URL}${popularGames}`;
export const newGamesURL = () => `${Base_URL}${newGames}`;

export const gameDetailsURL = (game_id) => `${Base_URL}games/${game_id}`;
//game screenshots
export const gameScreenShotsURL = (game_id) =>
  `${Base_URL}games/${game_id}/screenshots`;

//Search Game
export const searchGameURL = (game_name) =>
  `${Base_URL}games?search=${game_name}&page_size=9`;

console.log(populargamesURL());
