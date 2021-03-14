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
const popularGames = `games?dates=${LastYear},${currentDate}&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&page_size=10`;

export const upcomingGamesURL = () => `${Base_URL}${upcomingGames}`;
export const populargamesURL = () => `${Base_URL}${popularGames}`;
export const newGamesURL = () => `${Base_URL}${newGames}`;

console.log(populargamesURL());
