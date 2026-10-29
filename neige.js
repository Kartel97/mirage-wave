/* Neige qui tombe sur tout le site (désactivée si l'appareil demande moins d'animations) */
(function(){
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas");
  c.setAttribute("aria-hidden", "true");
  c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:90";
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  let W, H, flocons = [];
  const dpr = Math.min(devicePixelRatio || 1, 2);

  function taille(){
    W = innerWidth; H = innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(140, W * H / 9000));
    while (flocons.length < n) flocons.push(nouveau(true));
    flocons.length = n;
  }
  function nouveau(partout){
    const r = Math.random() * 2.4 + .6;
    return { x: Math.random() * W, y: partout ? Math.random() * H : -10, r,
      v: r * .35 + .25, d: Math.random() * Math.PI * 2, o: Math.random() * .5 + .35 };
  }
  let t = 0;
  function dessine(){
    t += .01;
    ctx.clearRect(0, 0, W, H);
    for (const f of flocons){
      f.y += f.v;
      f.x += Math.sin(t + f.d) * .45;
      if (f.y > H + 10) Object.assign(f, nouveau(false));
      if (f.x > W + 10) f.x = -10; else if (f.x < -10) f.x = W + 10;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${f.o})`;
      ctx.fill();
    }
    requestAnimationFrame(dessine);
  }
  addEventListener("resize", taille);
  taille(); dessine();
})();
