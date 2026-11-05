const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menu&&nav){
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
}
const box=document.querySelector('.lightbox');
if(box){
  const preview=box.querySelector('img');
  const cap=box.querySelector('figcaption');
  const imgs=[...document.querySelectorAll('[data-lightbox]')];
  let i=0;
  const show=n=>{i=(n+imgs.length)%imgs.length;const im=imgs[i];preview.src=im.src;preview.alt=im.alt;const fc=im.closest('figure')?.querySelector('figcaption');cap.textContent=fc?fc.textContent:''};
  const close=()=>box.classList.remove('open');
  imgs.forEach((im,n)=>im.addEventListener('click',()=>{show(n);box.classList.add('open')}));
  box.querySelector('button').addEventListener('click',close);
  box.addEventListener('click',e=>{if(e.target===box)close()});
  document.addEventListener('keydown',e=>{
    if(!box.classList.contains('open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowRight')show(i+1);
    if(e.key==='ArrowLeft')show(i-1);
  });
}
