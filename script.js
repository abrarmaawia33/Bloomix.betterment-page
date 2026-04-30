// Stars generation
const se = document.getElementById('starsEl');
for(let i = 0; i < 55; i++){
  const s = document.createElement('div');
  s.className = 'star';
  const z = Math.random() < 0.25 ? 4 : 2;
  s.style.cssText = `width:${z}px;height:${z}px;top:${Math.random()*85}%;left:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${1.5+Math.random()*2}s`;
  se.appendChild(s);
}

// Tab switcher
function setTab(i){
  document.querySelectorAll('.how-tab').forEach((t,j) => t.classList.toggle('active', i===j));
  document.querySelectorAll('.how-panel').forEach((p,j) => p.classList.toggle('active', i===j));
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Toast
let tt;
function showToast(msg){
  document.getElementById('toast-msg').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(tt);
  tt = setTimeout(() => t.classList.remove('show'), 2800);
}