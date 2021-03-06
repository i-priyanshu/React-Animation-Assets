import { v4 as uuidv4 } from "uuid";

const chillhop = () => {
  return [
    {
      name: "Sonar",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/16bcbe48680098798af04f176daae3693839238d-1024x1024.jpg",
      artist: "iNvention",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8288",
      color: ["#566FAF", "#C49BC5"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Fox",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9224",
      color: ["#2C104A", "#BE487D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Departure",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11771",
      color: ["#395291", "#F59F68"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#29C2B6", "#954C44"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Procrastinating",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/99c90197abcb6c4a16f48ea8f002eac25b9ac1da-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7806",
      color: ["#077A90", "#88616B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Koi",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/ce88ec59bc8040bd6a4a23e4206ff0eed36813d8-1024x1024.jpg",
      artist: "Gyvus",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8835",
      color: ["#C3B793", "#DBDD4B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-300x300.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#F79098", "#5F548E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Droplet",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/888ce90dd44b73f819413e20d744bc00e6f9adac-300x300.jpg",
      artist: "Kupla",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8789",
      color: ["#441B9D", "#FD7589"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Soulful",
      cover: "https://i.scdn.co/image/ab67616d0000b2735407baa076fdb136da00b67b",
      artist: "L'Indécis",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8092",
      color: ["#DFD9BF", "#C2B4AC"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillhop;
