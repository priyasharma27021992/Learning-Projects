
function init() {
  initVolunteerCard();
}

function initVolunteerCard() {
  var cards = document.querySelectorAll('.card');
  for (const card of cards) {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  }
}

export default function Volunteer() {
  return {
    init: init
  };
};