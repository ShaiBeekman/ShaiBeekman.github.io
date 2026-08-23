const terms=[...document.querySelectorAll('.terms span')];
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(terms.length && !reduceMotion){
  let i=0;
  setInterval(()=>{
    terms.forEach(t=>t.classList.remove('accent'));
    terms[i%terms.length].classList.add('accent');
    i++;
  },900);
}

const root=document.documentElement;
const themeButton=document.querySelector('.theme-icon');
const savedTheme=localStorage.getItem('shai-portfolio-theme');
if(savedTheme==='dark'||savedTheme==='light') root.dataset.theme=savedTheme;

function syncThemeIcon(){
  if(!themeButton) return;
  const dark=root.dataset.theme==='dark';
  themeButton.textContent=dark?'☾':'☼';
  themeButton.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
  themeButton.title=dark?'Switch to light theme':'Switch to dark theme';
}

if(themeButton){
  syncThemeIcon();
  themeButton.addEventListener('click',()=>{
    root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
    localStorage.setItem('shai-portfolio-theme',root.dataset.theme);
    syncThemeIcon();
  });
}

