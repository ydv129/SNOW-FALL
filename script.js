gsap.to("#page1",{




}) 



function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '&#10052;'; // Unicode for snowflake
    snowflake.classList.add('snowflake');
    document.body.appendChild(snowflake);

    const size = Math.random() * 20 + 5;
    const startPosition = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5;
    const rotation = Math.random() * 360;

    gsap.set(snowflake, {
      fontSize: `${size}px`,
      left: `${startPosition}px`,
      rotation: rotation
    });

    gsap.to(snowflake, {
      y: window.innerHeight + 50,
      x: startPosition + (Math.random() * 100 - 50),
      opacity: 0,
      rotation: rotation + 180,
      duration: duration,
      ease: 'linear',
      onComplete: () => {
        snowflake.remove();
      }
    });
  }

  function generateSnowflakes() {
    setInterval(createSnowflake, 100);
  }

  generateSnowflakes();

  // Adjust on resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.snowflake').forEach(snowflake => snowflake.remove());
  });