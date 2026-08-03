(() => {
  const scriptUrl = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src)
    : new URL('assets/js/shared-layout.js', document.baseURI);
  const siteRoot = new URL('../../', scriptUrl);
  const url = (path) => new URL(path, siteRoot).href;
  const page = location.pathname.split('/').pop() || 'index.html';
  const section = location.pathname.includes('/publications/') ? 'publications.html' : page;
  const navItems = [
    ['Home','index.html'],['Research','research.html'],['Publications','publications.html'],
    ['Experience','experience.html'],['Service','service.html'],['News','news.html']
  ];
  const social = [
    ['LinkedIn','https://www.linkedin.com/in/asal-mehradfar/',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`],
    ['Google Scholar','https://scholar.google.com/citations?hl=en&oi=sra&user=vRrC7UMAAAAJ',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/></svg>`],
    ['ORCID','https://orcid.org/0009-0008-2771-5387',`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#A6CE39"/><text x="12" y="15.1" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="9.2" font-weight="700">iD</text></svg>`],
    ['GitHub','https://github.com/AsalMehradfar',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`],
    ['Hugging Face','https://huggingface.co/AsalMehradfar',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2.5 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5.5 5c-.276 0-.5.224-.5.5 0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-.276-.224-.5-.5-.5H9z"/></svg>`],
    ['Semantic Scholar','https://www.semanticscholar.org/author/Asal-Mehradfar/2313475450',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>`],
    ['X / Twitter','https://x.com/AsalMehradfar',`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`],
    ['Email','mailto:mehradfa@usc.edu',`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`]
  ];
  const baseCss = `
    :host{--bg:#fbfcff;--alt:#f6f8fc;--text:#182136;--muted:#64748b;--subtle:#8994a8;--accent:#4d6fb3;--accent-light:#edf3ff;--border:#dfe6f0;--font:'Inter',system-ui,-apple-system,sans-serif;color-scheme:light}
    :host([theme="dark"]){--bg:#101827;--alt:#151f31;--text:#f3f6fb;--muted:#9eacc0;--subtle:#74839a;--accent:#91b7ef;--accent-light:#1c3150;--border:#2b3a52;color-scheme:dark}
    *,*::before,*::after{box-sizing:border-box} a{text-decoration:none} button{font:inherit}
    .container{width:100%;max-width:900px;margin-inline:auto;padding-inline:2rem}
    @media(max-width:768px){.container{padding-inline:1.5rem}}
    @media(max-width:430px){.container{padding-inline:1rem}}
  `;
  class SiteHeader extends HTMLElement{
    connectedCallback(){ this.render(); this.syncTheme(); this._obs=new MutationObserver(()=>this.syncTheme()); this._obs.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']}); }
    disconnectedCallback(){this._obs&&this._obs.disconnect()}
    syncTheme(){this.setAttribute('theme',document.documentElement.getAttribute('data-theme')||'light')}
    render(){
      const active=(p)=>section===p?' aria-current="page"':'';
      const links=navItems.map(([n,p])=>`<li><a class="nav-link" href="${url(p)}"${active(p)}>${n}</a></li>`).join('');
      const mobile=navItems.map(([n,p])=>`<a class="nav-link" href="${url(p)}"${active(p)}>${n}</a>`).join('');
      this.attachShadow({mode:'open'}).innerHTML=`<style>${baseCss}
      :host{display:block;position:sticky;top:0;z-index:1000;height:64px}
      nav{height:64px;background:var(--bg);border-bottom:1px solid var(--border);backdrop-filter:blur(8px)}
      .inner{height:100%;display:flex;align-items:center;justify-content:space-between;gap:1.5rem}
      .logo{flex-shrink:0;color:var(--text);font-size:1rem;font-weight:700;letter-spacing:-.02em;line-height:1.2}
      ul{display:flex;align-items:center;gap:.25rem;margin:0;padding:0;list-style:none}
      .nav-link{display:inline-flex;align-items:center;color:var(--muted);font-size:.875rem;font-weight:500;padding:.25rem .5rem;border-radius:6px;white-space:nowrap}
      .nav-link:hover,.nav-link[aria-current="page"]{color:var(--accent);background:var(--alt)}
      .nav-link[aria-current="page"]{font-weight:600}
      .cv{border:1.5px solid var(--border);color:var(--text);padding:.3rem 1rem;background:transparent}
      .actions{display:flex;align-items:center;gap:.5rem}
      .theme,.hamb{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:1.5px solid var(--border);border-radius:6px;background:transparent;color:var(--muted);cursor:pointer}
      .theme svg{width:16px;height:16px}.sun{display:none}:host([theme="dark"]) .sun{display:block}:host([theme="dark"]) .moon{display:none}
      .hamb{display:none;width:36px;height:36px;flex-direction:column;gap:5px}.hamb span{width:18px;height:1.5px;background:var(--text)}
      .mobile{display:none;position:fixed;inset:64px 0 0;background:var(--bg);border-top:1px solid var(--border);padding:1.5rem;flex-direction:column;gap:.25rem;overflow:auto}.mobile.open{display:flex}.mobile .nav-link{font-size:1rem;padding:.5rem 1rem}
      @media(max-width:768px){ul{display:none}.hamb{display:flex}}
      </style><nav><div class="container inner"><a class="logo" href="${url('index.html')}">Asal Mehradfar</a><ul>${links}<li><a class="nav-link cv" href="${url('assets/files/Asal-Mehradfar-CV.pdf')}" target="_blank">CV</a></li></ul><div class="actions"><button class="theme" aria-label="Toggle dark mode"><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg><svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg></button><button class="hamb" aria-label="Open navigation"><span></span><span></span><span></span></button></div></div></nav><div class="mobile">${mobile}<a class="nav-link cv" href="${url('assets/files/Asal-Mehradfar-CV.pdf')}" target="_blank">Download CV</a></div>`;
      const theme=this.shadowRoot.querySelector('.theme');theme.onclick=()=>{const d=document.documentElement;const next=(d.getAttribute('data-theme')||'light')==='dark'?'light':'dark';d.setAttribute('data-theme',next);localStorage.setItem('theme',next)};
      const ham=this.shadowRoot.querySelector('.hamb'),mob=this.shadowRoot.querySelector('.mobile');ham.onclick=()=>mob.classList.toggle('open');
    }
  }
  class SiteFooter extends HTMLElement{
    connectedCallback(){this.render();this.syncTheme();this._obs=new MutationObserver(()=>this.syncTheme());this._obs.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})}
    disconnectedCallback(){this._obs&&this._obs.disconnect()}
    syncTheme(){this.setAttribute('theme',document.documentElement.getAttribute('data-theme')||'light')}
    render(){const icons=social.map(([n,h,s])=>`<a href="${h}" aria-label="${n}" target="${h.startsWith('http')?'_blank':'_self'}">${s}</a>`).join('');const links=[...navItems,['CV','assets/files/Asal-Mehradfar-CV.pdf']].map(([n,p])=>`<a href="${url(p)}"${n==='CV'?' target="_blank"':''}>${n}</a>`).join('');this.attachShadow({mode:'open'}).innerHTML=`<style>${baseCss}
      :host{display:block}.footer{background:var(--alt);border-top:1px solid var(--border);padding:2rem 0 1rem}.inner{display:grid;grid-template-columns:1fr auto;gap:3rem;align-items:start;margin-bottom:3rem}.name{font-size:1.125rem;font-weight:700;color:var(--text);letter-spacing:-.02em}.social{display:flex;gap:.55rem;margin-top:.35rem;flex-wrap:wrap}.social a{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:1.5px solid var(--border);border-radius:6px;color:var(--muted)}.social svg{width:18px;height:18px;fill:currentColor}.social a[href^="mailto:"] svg{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.nav{display:grid;grid-template-columns:repeat(2,minmax(0,max-content));column-gap:1.6rem;row-gap:.4rem}.nav a{display:inline-block;font-family:'Inter',system-ui,-apple-system,sans-serif!important;font-size:.875rem!important;font-weight:400!important;font-style:normal!important;font-synthesis:none!important;font-variation-settings:'wght' 400!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-rendering:geometricPrecision!important;line-height:1.55!important;letter-spacing:0!important;text-transform:none!important;color:var(--muted)!important;text-decoration:none!important;}.nav a:link,.nav a:visited,.nav a:hover,.nav a:active,.nav a[aria-current='page']{font-family:'Inter',system-ui,-apple-system,sans-serif!important;font-weight:400!important;font-style:normal!important;font-synthesis:none!important;font-variation-settings:'wght' 400!important;color:var(--muted)!important;}.bottom{border-top:1px solid var(--border);padding-top:.55rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}.bottom p{margin:0;font-size:.8125rem;color:var(--subtle)}@media(max-width:768px){.inner{grid-template-columns:1fr;gap:2rem}.nav{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:420px){.nav{grid-template-columns:1fr}}
</style><footer class="footer"><div class="container"><div class="inner"><div><div class="name">Asal Mehradfar</div><div class="social">${icons}</div></div><nav class="nav">${links}</nav></div><div class="bottom"><p>© ${new Date().getFullYear()} Asal Mehradfar. All rights reserved.</p><p>University of Southern California</p></div></div></footer>`}
  }
  customElements.define('site-header',SiteHeader);customElements.define('site-footer',SiteFooter);
})();
