const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);

const colors = ['#f5c32c', '#ffffff', '#aaaaaa', '#FF0000', '#2735F5'];
const particles = [];
const particleCount = 80;

// Create initial particles
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.6,
    color: colors[Math.floor(Math.random() * colors.length)],
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8
  });
}

let mouse = { x: null, y: null };

// Mouse movement tracking
document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Click interaction: spawn 5 particles
document.addEventListener('click', (e) => {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      radius: Math.random() * 1.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2
    });
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p) => {
    // Cursor attraction
    if (mouse.x && mouse.y) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x += dx * 0.003;
        p.y += dy * 0.003;
      }
    }

    // Move particles
    p.x += p.dx;
    p.y += p.dy;

    // Bounce on window edges
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
