const YouChose = document.querySelector(".You-chose");
const AIChose = document.querySelector(".AI-chose");
const YourScore = document.querySelector(".Your-score");
const Ties = document.querySelector(".Ties");
const AIScore = document.querySelector(".AI-score");

const Picks = Object.freeze({
  Rock: 0,
  Paper: 1,
  Scissors: 2,
  NONE: 3,
});

const Results = Object.freeze({
  Draw: 0,
  Player: 1,
  AI: 2,
});

var P_pick_S = "";
var AI_pick_S = "";

var game = {
  Player_Pick: Picks.NONE,
  AI_Pick: Picks.NONE,
  Player_Score: 0,
  AI_Score: 0,
  TIED_Score: 0,
  result: 0,
};

if (
  localStorage.getItem("AIScore") &&
  localStorage.getItem("PScore") &&
  localStorage.getItem("Ties")
) {
  game.AI_Score = localStorage.getItem("AIScore");
  game.TIED_Score = localStorage.getItem("Ties");
  game.Player_Score = localStorage.getItem("PScore");
  YourScore.innerHTML = `Your Score: ${game.Player_Score}`;
  Ties.innerHTML = `Ties: ${game.TIED_Score}`;
  AIScore.innerHTML = `AI Score: ${game.AI_Score}`;
}

function resetTEXT() {
  YouChose.innerHTML = `You Chose:`;
  AIChose.innerHTML = `AI Chose:`;
  YourScore.innerHTML = `Your Score:`;
  Ties.innerHTML = `Ties:`;
  AIScore.innerHTML = `AI Score:`;
}

function Reset() {
  resetTEXT();
  game.AI_Pick = Picks.NONE;
  game.Player_Pick = Picks.NONE;
  game.AI_Score = 0;
  game.Player_Score = 0;
  game.TIED_Score = 0;
  game.result = Results.Draw;
  localStorage.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

const AIpick = () => {
  return Math.floor(Math.random() * 3);
};

function Pick(pick) {
  setTimeout(() => {
    if (pick == 0)
      P_pick_S = `Rock <i class="fa fa-hand-rock" aria-hidden="true" /></i>`;
    if (pick == 1)
      P_pick_S = `Paper <i class="fa fa-hand-paper" aria-hidden="true" /></i>`;
    if (pick == 2)
      P_pick_S = `Scissors <i class="fa fa-hand-scissors" aria-hidden="true" /></i>`;
    var ai_pick_VAR = AIpick();
    if (ai_pick_VAR == 0)
      AI_pick_S = `Rock <i class="fa fa-hand-rock" aria-hidden="true" /></i>`;
    if (ai_pick_VAR == 1)
      AI_pick_S = `Paper <i class="fa fa-hand-paper" aria-hidden="true" /></i>`;
    if (ai_pick_VAR == 2)
      AI_pick_S = `Scissors <i class="fa fa-hand-scissors" aria-hidden="true" /></i>`;
    setPrams(pick, ai_pick_VAR);
  }, 500);
  resetTEXT();
}

const gamelogic = () => {
  if (game.AI_Pick == game.Player_Pick) {
    game.result = Results.Draw;
    game.TIED_Score++;
  } else if (
    (game.AI_Pick == Picks.Rock && game.Player_Pick == Picks.Scissors) ||
    (game.AI_Pick == Picks.Paper && game.Player_Pick == Picks.Rock) ||
    (game.AI_Pick == Picks.Scissors && game.Player_Pick == Picks.Paper)
  ) {
    //? AI wins
    game.result = Results.AI;
    game.AI_Score++;
  } else if (
    (game.Player_Pick == Picks.Rock && game.AI_Pick == Picks.Scissors) ||
    (game.Player_Pick == Picks.Paper && game.AI_Pick == Picks.Rock) ||
    (game.Player_Pick == Picks.Scissors && game.AI_Pick == Picks.Paper)
  ) {
    //? Player wins
    game.result = Results.Player;
    game.Player_Score++;
  }

  YouChose.innerHTML = `You Chose: ${P_pick_S}`;
  AIChose.innerHTML = `AI Chose: ${AI_pick_S}`;
  YourScore.innerHTML = `Your Score: ${game.Player_Score}`;
  Ties.innerHTML = `Ties: ${game.TIED_Score}`;
  AIScore.innerHTML = `AI Score: ${game.AI_Score}`;
  localStorage.setItem("AIScore", game.AI_Score);
  localStorage.setItem("Ties", game.TIED_Score);
  localStorage.setItem("PScore", game.Player_Score);
};

const setPrams = (P_P_Pick, P_AI_Pick) => {
  game.Player_Pick = P_P_Pick;
  game.AI_Pick = P_AI_Pick;
  gamelogic();
};
