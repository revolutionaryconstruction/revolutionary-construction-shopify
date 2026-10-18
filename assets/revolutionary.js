document.addEventListener('DOMContentLoaded',function(){
  const slides=document.querySelectorAll('.rev-slide');
  const dots=document.querySelectorAll('.rev-dot');
  let i=0;
  if(slides.length>1){
    setInterval(function(){
      slides[i].classList.remove('active');
      if(dots[i])dots[i].classList.remove('active');
      i=(i+1)%slides.length;
      slides[i].classList.add('active');
      if(dots[i])dots[i].classList.add('active');
    },4800);
  }
  const obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('show')});
  },{threshold:.16});
  document.querySelectorAll('.rev-card,.rev-project,.rev-option,.rev-step,.rev-quote').forEach(function(el,idx){
    el.style.transitionDelay=Math.min(idx*70,420)+'ms';
    obs.observe(el);
  });
});