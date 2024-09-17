


export function createHexagonPixelatedSpinner(options = {}) {
  const {
    size = 60,
    color = '#3B82F6',
    speed = 1,
    containerId = 'hexagon-pixelated-spinner'
  } = options;

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return null;
  }

  // Create spinner container
  const spinnerContainer = document.createElement('div');
  spinnerContainer.style.width = `${size}px`;
  spinnerContainer.style.height = `${size}px`;
  spinnerContainer.style.position = 'relative';
  spinnerContainer.style.transition = 'transform 0.25s ease';
  spinnerContainer.setAttribute('role', 'status');
  spinnerContainer.setAttribute('aria-label', 'Loading');

  // Define hexagon shape
  const pixelSize = size / 7;
  const hexagonPixels = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ];

  // Create pixels
  hexagonPixels.forEach((row, i) => {
    row.forEach((pixel, j) => {
      if (pixel) {
        const pixelElement = document.createElement('div');
        pixelElement.style.position = 'absolute';
        pixelElement.style.top = `${i * pixelSize}px`;
        pixelElement.style.left = `${j * pixelSize}px`;
        pixelElement.style.width = `${pixelSize}px`;
        pixelElement.style.height = `${pixelSize}px`;
        pixelElement.style.backgroundColor = color;
        spinnerContainer.appendChild(pixelElement);
      }
    });
  });

  container.appendChild(spinnerContainer);

  let rotation = 0;
  let intervalId = null;

  // Animation function
  function animate() {
    rotation = (rotation + 60) % 360;
    spinnerContainer.style.transform = `rotate(${rotation}deg)`;
  }

  // Start animation
  function start() {
    if (!intervalId) {
      intervalId = setInterval(animate, 1000 / speed);
    }
  }

  // Stop animation
  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Remove spinner
  function destroy() {
    stop();
    if (spinnerContainer && spinnerContainer.parentNode) {
      spinnerContainer.parentNode.removeChild(spinnerContainer);
    }
  }

  // Start the animation immediately
  start();

  // Return control functions
  return { start, stop, destroy };
}