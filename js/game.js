const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  
  $(".target").removeClass('target')
  $(".miss").removeClass('miss')
  
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  
  $(".target").text(hits + 1);

  if (hits === 1) {firstHitTime = getTimestamp();}

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $(".game-field").addClass('d-none');

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
   
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
    $(event.target).text('');
  } else {$(event.target).addClass('miss')}
  
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
