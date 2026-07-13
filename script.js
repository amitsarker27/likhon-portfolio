// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll state
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Hero role typewriter (looping)
const roles = ["I am Electrical Engineer", "I am Maintenance Specialist", "I am Automation Enthusiast"];
const typedEl = document.getElementById('typed');
let rI = 0, cI = 0, deleting = false;
function tick() {
  const word = roles[rI % roles.length];
  typedEl.textContent = word.slice(0, cI);
  if (!deleting && cI === word.length) { setTimeout(() => { deleting = true; tick(); }, 1400); return; }
  if (deleting && cI === 0) { deleting = false; rI++; setTimeout(tick, 300); return; }
  cI += deleting ? -1 : 1;
  setTimeout(tick, deleting ? 45 : 90);
}
tick();

// Section headings — type on scroll into view (once each)
const headings = document.querySelectorAll('.typed-heading');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting || e.target.dataset.done) return;
    e.target.dataset.done = '1';
    const el = e.target;
    const full = el.dataset.text || '';
    let i = 0;
    const step = () => {
      el.textContent = full.slice(0, i);
      if (i < full.length) { i++; setTimeout(step, 55); }
    };
    step();
  });
}, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
headings.forEach(h => io.observe(h));
