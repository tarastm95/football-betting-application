const game = {
  team1: "Челсі",
  team2: "Реал",
  players: [
    [
      "ЕДУАР МЕНДІ",
      "ТІАГУ СІЛВА",
      "КАЛІДУ КУЛІБАЛІ",
      "МАРК КУКУРЕЛЬЯ",
      "БЕН ЧІЛВЕЛЛ",
      "МАТЕО КОВАЧИЧ",
      "МИХАЙЛО МУДРИК",
      "КОНОР ГАЛЛАХЕР",
      "КРІСТІАН ПУЛИШИЧ",
      "РАХІМ СТЕРЛІНГ",
      "П'ЄР-ЕМЕРІК ОБАМЕЯНГ",
    ],
    [
      "ТІБО КУРТУА",
      "АЛЬВАРО ОДРІОСОЛА",
      "ФЕРЛАН МЕНДІ",
      "ДАНІЕЛЬ КАРВАХАЛЬ",
      "ЕДЕР МІЛІТАО",
      "ЛУКА МОДРИЧ",
      "ТОНІ КРООС",
      "ЛУКАС ВАСКЕС",
      "ФЕДЕРІКО ВАЛЬВЕРДЕ",
      "ЕДЕН АЗАР",
      "МАРІАНО ДІАС",
    ],
  ],
  score: "4:0",
  scored: ["МАРІАНО ДІАС", "ЕДЕН АЗАР", "МАРІАНО ДІАС", "ЕДЕР МІЛІТАО"],
  date: "9 квітня, 2023",
  odds: {
    team1: 1.73,
    x: 3.25,
    team2: 2.25,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "ВЕСЛІ ФОФАНА", "ДЕНІC ЗАКАРІЯ", "ЧУКВУНОНСО МАДУЕКЕ"];

const {odds: {team1, x: draw, team2}} = game;

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} голів було забито`);
};

printGoals(...game.scored);

team1 < team2 && console.log('Команда 1 має більше шансів на перемогу');
team1 > team2 && console.log('Команда 2 має більше шансів на перемогу');
