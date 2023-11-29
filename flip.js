document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.game-container').forEach(container => {
    const front = container.querySelector('.game-front');
    const back = container.querySelector('.game-back');

    function toggleCard() {
      if (front.style.transform === 'translateX(-5%) translateY(-5%)' || front.style.transform === '') {
        front.style.transform = 'translateX(5%) translateY(5%)';
        front.style.zIndex = '1';
        back.style.transform = 'translateX(-5%) translateY(-5%)';
        back.style.zIndex = '2';
      } else {
        front.style.transform = 'translateX(-5%) translateY(-5%)';
        front.style.zIndex = '2';
        back.style.transform = 'translateX(5%) translateY(5%)';
        back.style.zIndex = '1';
      }
    }

    container.addEventListener('click', toggleCard);

    container.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        toggleCard();
      }
    });
  });
});
