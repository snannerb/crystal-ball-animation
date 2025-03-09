// Add hover effect to the crystal ball
const crystalBall = document.querySelector('.crystal-ball');

crystalBall.addEventListener('mouseenter', () => {
  crystalBall.style.transform = 'scale(1.1)';
  crystalBall.style.transition = 'transform 0.3s ease';
});

crystalBall.addEventListener('mouseleave', () => {
  crystalBall.style.transform = 'scale(1)';
});