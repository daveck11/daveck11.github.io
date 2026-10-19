/* David Nkpa portfolio. All page text lives in DATA below; edit there. */
(function () {
  'use strict';

  const IMG = 'assets/img/';
  const EMAIL = 'dcnkpa@gmail.com';
  const LINKEDIN = 'https://www.linkedin.com/in/david-nkpa-578712290';
  const GITHUB = 'https://github.com/daveck11';
  const CV_PDF = 'assets/docs/David_Nkpa_CV.pdf';

  /* ------------------------------------------------------------------ */
  /* Content                                                              */
  /* ------------------------------------------------------------------ */
  const PROJECTS = [
    {
      id: 'agenclave',
      name: 'Agenclave',
      mono: 'Ag', color: '#4b5bd6', tint: 't-agen',
      tag: 'Trust layer for multi-agent coding',
      when: '2026',
      stack: 'Python, FastAPI, React, BlackBox AI API',
      result: '0.675 macro-F1 bug triage',
      short: 'Four AI models write a fix for the same bug. Agenclave runs every patch in a sandbox and tells you which one to trust.',
      card: { type: 'img', src: 'agenclave-loop.png', alt: 'Agenclave trust loop diagram', dark: true },
      media: [
        { src: 'agenclave-loop.png', alt: 'The trust loop: patches run in sandboxes, get ranked, and feed back into model selection', dark: true },
        { src: 'agenclave-classifier.png', alt: 'Triage classifier results: plain TF-IDF beat transformer embeddings', dark: true }
      ],
      prose: [
        "When four AI models each write a fix for the same bug, which one do you actually trust? A judge model can read the patches and pick one, but when they disagree, reading is a guess. So I built Agenclave to run them instead. Each patch is applied in a throwaway sandbox, its tests are run, and it gets ranked trusted, applies-but-fails or broken, with a plain-English reason.",
        "It remembers which models actually passed and uses that to pick who competes next time (Thompson sampling), and it tells you why. In front sits a small classifier I trained to filter out anything that isn't a bug: 0.675 macro-F1 on 1,793 held-out issues. Plain TF-IDF beat the transformer embeddings, so I shipped the simpler model.",
        "Python, FastAPI and React, with the agents running through BlackBox AI's API. Still early though. The reliability numbers are small samples (under 20 verified runs per model). The web app runs the tests on its built-in practice bugs. For an issue you paste in yourself, it falls back to a judge that reads the patches."
      ],
      links: [
        { label: 'Loom walkthrough', href: 'https://www.loom.com/share/38124557b68b4372ac44e7d3d5875210' },
        { label: 'Write-up', href: 'https://davidnkpa.notion.site/BLACKBOXAI-Agenclave-A-Verification-Backed-Trust-Layer-for-Multi-Agent-Coding-3927b26f35cb8038b64bd04f4166f5d1' },
        { label: 'Code', href: 'https://github.com/daveck11/BlackBox-Agenclave/tree/feat/trust-scored-routing' }
      ]
    },
    {
      id: 'defi',
      name: 'Live DeFi Liquidity Agent',
      mono: 'Df', color: '#0f766e', tint: 't-defi',
      tag: 'Hackathon winner',
      when: 'Jun 2026',
      stack: 'Python, NumPy, Hidden Markov Models',
      result: '1st place, TurinTech AI track',
      short: 'An agent that manages liquidity in a Uniswap V3-style pool and only rebalances when it pays. 1st place at UKFinnovator.',
      card: { type: 'photo', src: 'hackathon-pitch.jpg', alt: 'David and his team pitching at Imperial College London' },
      mediaPair: [
        { src: 'hackathon-group.jpg', alt: 'Hackathon group photo at Imperial' },
        { src: 'hackathon-pitch.jpg', alt: 'The team presenting the evaluation methodology to the judges' }
      ],
      prose: [
        "Won 1st place in the TurinTech AI track at the UKFinnovator hackathon at Imperial this year, and pitched the final thing to judges from King's and TurinTech AI.",
        "The idea: an agent that manages liquidity in a Uniswap V3-style pool. I built a Hidden Markov Model from scratch in pure NumPy that reads the market in real time, works out which of three \"regimes\" we're in, and rebalances, but only when the expected profit actually beats the gas cost. It beat every baseline they gave us on the hidden test seeds.",
        "Built in about a day, with no libraries doing the hard part for me. Easily the most fun I've had coding under pressure."
      ],
      links: []
    },
    {
      id: 'finance-assistant',
      name: 'AI Financial Decision Assistant',
      mono: 'Fi', color: '#15803d', tint: 't-fin',
      tag: 'Final-year project',
      when: 'Sep 2025 – May 2026',
      stack: 'Python, FastAPI, React, PostgreSQL, GPT-4o (RAG)',
      result: '55-stock universe, 4 risk clusters',
      short: 'Helps everyday investors understand US stocks (volatility, drawdown, risk vs return) without needing a finance degree.',
      card: { type: 'photo', src: 'spectra-analysis.png', alt: 'Spectra stock analysis screen for NVDA with price, moving averages, trend and returns' },
      media: [
        { src: 'spectra-analysis.png', alt: 'Stock Analysis: price and moving averages, trend in plain words, recent returns', dark: true },
        { src: 'spectra-score.png', alt: 'Compare against the S&P 500, risk snapshot, composite score and evaluation matrix', dark: true },
        { src: 'spectra-assistant.png', alt: 'AI Assistant explaining what the composite score means for a stock', dark: true },
        { src: 'spectra-dashboard.png', alt: 'Dashboard with watchlist cluster breakdown and returns', dark: true }
      ],
      prose: [
        "My final-year project, called Spectra. A full-stack web app that helps everyday investors actually understand US stocks: volatility, drawdown, risk vs return, without needing a finance degree to read it.",
        "The backend is a Python/FastAPI service that pulls in market data and crunches the indicators with Pandas and NumPy. On top of that I built an agentic LLM layer that turns the raw numbers into plain-English comparisons you can act on. I spent a lot of the time making sure it stays grounded and doesn't just make things up.",
        "Every user gets a risk profile, from conservative to aggressive, and the 55 stocks in the universe are grouped into four clusters with K-Means (stable and defensive up to high risk). The assistant uses retrieval to pull examples that match both your risk band and the stock's cluster before GPT-4o writes anything. It also has hard rules: no buy or sell calls, no predictions, and it says so when it doesn't have the data.",
        "React on the front, FastAPI and PostgreSQL behind it, market data from Twelve Data."
      ],
      mediaNote: 'Screenshots from the dissertation build, April 2026.',
      links: [{ label: 'Code on request, just email me', href: 'mailto:' + EMAIL }]
    },
    {
      id: 'crime-model',
      name: 'Met Police Crime Prediction',
      mono: 'Cr', color: '#b45309', tint: 't-crime',
      tag: 'Data project',
      when: 'Mar 2026',
      stack: 'Python, Pandas, scikit-learn, K-Means, MapReduce',
      result: '0.934 R² on the test set',
      short: '1.1M+ Met Police crime records rolled into 56,571 neighbourhood-months. Random Forest landed at 0.934 R².',
      card: { type: 'img', src: 'crime-london-map.png', alt: 'Map of crime counts across London neighbourhoods', white: true },
      media: [
        { src: 'crime-london-map.png', alt: 'Geographic crime distribution across London, darker points mean more crime', white: true },
        { src: 'crime-clusters-map.png', alt: 'London neighbourhoods coloured by K-Means cluster (k=4)', white: true }
      ],
      prose: [
        "Took 1.1 million+ Met Police crime records and built a pipeline that cleans and rolls them up into about 56,000 neighbourhood-month rows. I engineered the features myself (lagged crime counts, crime-type ratios, even Shannon entropy) and was careful about leakage with proper time-based splits.",
        "Random Forest landed at 0.934 R² on the test set. Turns out last month's crime count is by far the best predictor of next month's. I also clustered neighbourhoods with K-Means and ran the heavy processing MapReduce-style."
      ],
      links: [{ label: 'Code on GitHub', href: 'https://github.com/daveck11/London-Metropolitan-Crime-Forecasting' }]
    },
    {
      id: 'aws-cloud',
      name: 'Private Cloud on AWS',
      mono: 'Aw', color: '#9a3412', tint: 't-aws',
      tag: 'Cloud architecture',
      when: 'Nov – Dec 2025',
      stack: 'AWS, EKS, Kubernetes, ElastiCache (Redis), VPC',
      result: 'Self-healing, consistency-first',
      short: 'A self-healing Kubernetes setup on AWS, with a Redis layer that stays consistent when the network splits.',
      card: { type: 'aws' },
      prose: [
        "Designed and built a fault-tolerant, cloud-native setup on AWS with Kubernetes (EKS), the kind that scales sideways and heals itself when something falls over. Network isolation with VPCs, public and private subnets and NAT gateways. The stateless services sit behind managed load balancers.",
        "Shared state runs through Redis (ElastiCache), and I actually had to sit down and reason through the CAP trade-offs to go consistency-first when the network splits."
      ],
      mediaNote: 'Simplified diagram of the setup.',
      links: []
    }
  ];

  const SMALL_BUILDS = [
    { name: 'Idea Sprint', href: 'https://idea-sprint-zeta.vercel.app', text: 'Dump an idea by typing or talking, give it a deadline, and it breaks it into three tasks.' },
    { name: 'Hub', href: 'https://hubproject-ruby.vercel.app', text: "One place for everything I'm trying to move forward. Topics, tasks, logged progress and streaks." }
  ];

  const ROLES = [
    { logo: 'rolls-royce.png', mono: 'RR', color: '#1f2a44', title: 'Finance Analyst', co: 'Rolls-Royce', place: 'London', when: 'Apr 2026 – Jun 2026',
      text: 'Pulled a messy 12-month cost dataset (six months of actuals, six of forecasts) into something management could actually read. Built the Excel model behind it, then boiled the whole thing down to a 5-slide exec deck with three clear recommendations.' },
    { logo: 'boom.png', mono: 'B', color: '#111318', title: 'Software Engineering Intern', co: 'Boom Technologies · Fintech', place: 'London', when: 'Sep 2025 – Oct 2025',
      text: "Shipped 10+ admin analytics features into a React back-office system so the team could see what was going on and make faster calls. Also wrote a CEO-ready report on which LLMs to use and how to think about sustainable data-centre setups, written for people who aren't technical." },
    { mono: '181', color: '#3b4252', title: 'Research Intern', co: '181st Street Communications', place: 'London (remote)', when: 'Jun 2025 – Jul 2025',
      text: 'Built website prototypes around the user journey, then set up the analytics to see where people actually dropped off. The changes we tested lifted sign-up conversion by 12% on the test pages. I also turned the research into plain recommendations and test plans for people who are not technical.' },
    { logo: 'ecobank.png', mono: 'E', color: '#005f8f', title: 'IT Intern', co: 'Ecobank Transnational Inc.', place: 'Lomé, Togo', when: 'Jul 2022 – Aug 2022',
      text: 'My first look at tech inside a bank. I supported the SWIFT payment systems and the anti-money-laundering tools, and fixed 30+ priority network incidents while following strict escalation and audit rules. Learned quickly how much logging and sign-off sits behind every change in a regulated place.' }
  ];

  const SKILLS = [
    { title: 'Languages', items: [['Python', '#3776ab'], ['SQL', '#d97706'], ['JavaScript', '#e5b800'], ['HTML/CSS', '#e4572e'], ['English · native', '#94a3b8'], ['French · working', '#94a3b8']] },
    { title: 'Frameworks & Libraries', items: [['React', '#38bdf8'], ['FastAPI', '#059669'], ['Pandas', '#4b3ba8'], ['NumPy', '#4d77cf'], ['scikit-learn', '#f7931e']] },
    { title: 'Cloud & Tools', items: [['AWS', '#ff9900'], ['EKS / Kubernetes', '#326ce5'], ['ElastiCache (Redis)', '#dc382d'], ['Git & GitHub', '#6e5494'], ['Vercel', '#111318'], ['REST APIs', '#64748b'], ['Excel modelling', '#1d7044'], ['PowerPoint', '#c43e1c'], ['Figma', '#a259ff'], ['Canva', '#00c4cc']] },
    { title: 'AI & Modelling', items: [['Claude API', '#d97757'], ['OpenAI API', '#10a37f'], ['LLM agents', '#6366f1'], ['Prompt engineering', '#8b5cf6'], ['Hidden Markov Models', '#0f766e'], ['Random Forest', '#15803d'], ['K-Means', '#b45309'], ['Thompson sampling', '#4b5bd6']] }
  ];

  /* ------------------------------------------------------------------ */
  /* Small helpers                                                        */
  /* ------------------------------------------------------------------ */
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const arrowSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const ext = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
  const mono = (m, c, cls) => `<span class="mono ${cls || ''}" style="background:${c}" aria-hidden="true">${esc(m)}</span>`;

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, 1800);
  }

  /* ------------------------------------------------------------------ */
  /* Project visuals                                                      */
  /* ------------------------------------------------------------------ */
  function finMock() {
    return `<div class="mock" role="img" aria-label="Illustration of the app comparing two stocks">
      <div class="mock-bar"><i></i><i></i><i></i><span>Compare two stocks</span></div>
      <div class="mock-body">
        <div class="mock-row">
          <div class="mock-tile"><b>Stock A</b>
            <div class="bar" style="--w:38%;--c:#15803d"></div><div class="bar" style="--w:30%;--c:#b45309"></div><div class="bar" style="--w:55%;--c:#2f5bd3"></div></div>
          <div class="mock-tile"><b>Stock B</b>
            <div class="bar" style="--w:72%;--c:#15803d"></div><div class="bar" style="--w:64%;--c:#b45309"></div><div class="bar" style="--w:61%;--c:#2f5bd3"></div></div>
        </div>
        <div class="mock-row" style="font-size:10.5px;color:#7b8191"><span>■ volatility ■ drawdown ■ return</span><span style="text-align:right">illustration</span></div>
        <div class="mock-say"><b>In plain English:</b> B swings around a lot more and fell further at its worst point. If big drops would keep you up at night, A is the calmer pick.</div>
      </div></div>`;
  }

  function awsDiagram() {
    // Simplified VPC diagram drawn from the project description. Fixed colours: it sits on a light tile in both themes.
    return `<svg class="aws-svg" viewBox="0 0 420 270" role="img" aria-label="Diagram: load balancer and NAT gateway in public subnets, EKS nodes in private subnets across two zones, Redis ElastiCache for shared state">
      <rect x="6" y="6" width="408" height="258" rx="12" fill="#ffffff" stroke="#e2c9ae" stroke-width="1.5"/>
      <text x="20" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#9a3412">AWS · VPC</text>
      <rect x="20" y="42" width="110" height="206" rx="9" fill="#fff4e8" stroke="#f1d3b3"/>
      <text x="30" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#7c4a1e">Public subnets</text>
      <rect x="32" y="74" width="86" height="44" rx="7" fill="#ffffff" stroke="#e8c49e"/>
      <text x="75" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#3b2a1a">Load balancer</text>
      <rect x="32" y="178" width="86" height="44" rx="7" fill="#ffffff" stroke="#e8c49e"/>
      <text x="75" y="204" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#3b2a1a">NAT gateway</text>
      <rect x="146" y="42" width="142" height="206" rx="9" fill="#eef3ff" stroke="#c9d6f5"/>
      <text x="156" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#26407d">Private subnets · EKS</text>
      <rect x="158" y="72" width="118" height="76" rx="7" fill="#ffffff" stroke="#bcccf0"/>
      <text x="168" y="88" font-family="Inter, sans-serif" font-size="9.5" fill="#26407d">Zone A</text>
      <rect x="168" y="98" width="28" height="20" rx="4" fill="#326ce5"/><rect x="202" y="98" width="28" height="20" rx="4" fill="#326ce5"/><rect x="236" y="98" width="28" height="20" rx="4" fill="#9fb8ef"/>
      <text x="168" y="138" font-family="Inter, sans-serif" font-size="9" fill="#5b6b8f">pods scale sideways</text>
      <rect x="158" y="160" width="118" height="76" rx="7" fill="#ffffff" stroke="#bcccf0"/>
      <text x="168" y="176" font-family="Inter, sans-serif" font-size="9.5" fill="#26407d">Zone B</text>
      <rect x="168" y="186" width="28" height="20" rx="4" fill="#326ce5"/><rect x="202" y="186" width="28" height="20" rx="4" fill="#326ce5"/><rect x="236" y="186" width="28" height="20" rx="4" fill="#9fb8ef"/>
      <text x="168" y="226" font-family="Inter, sans-serif" font-size="9" fill="#5b6b8f">self-healing</text>
      <rect x="304" y="104" width="98" height="82" rx="9" fill="#fff0ef" stroke="#f0c2be"/>
      <text x="353" y="134" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" font-weight="600" fill="#8f1d16">ElastiCache</text>
      <text x="353" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#8f1d16">Redis</text>
      <text x="353" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="8.5" fill="#a55a54">consistency-first</text>
      <g stroke="#8a94a8" stroke-width="1.4" fill="none" stroke-linecap="round">
        <path d="M118 96 H158"/><path d="M118 96 C140 96 140 198 158 198"/>
        <path d="M276 110 H304"/><path d="M276 198 C292 198 292 170 304 170"/>
        <path d="M158 210 H118"/>
      </g>
    </svg>`;
  }

  function cardMedia(p) {
    const c = p.card;
    let inner;
    if (c.type === 'photo') inner = `<img src="${IMG + c.src}" alt="${esc(c.alt)}" loading="lazy">`;
    else if (c.type === 'img') inner = `<img src="${IMG + c.src}" alt="${esc(c.alt)}" loading="lazy" style="background:${c.dark ? '#141414' : '#fff'};padding:10px;box-shadow:0 10px 30px rgba(20,30,50,.12)">`;
    else if (c.type === 'mock-fin') inner = finMock();
    else inner = awsDiagram();
    return `<div class="card-media ${p.tint} ${c.type === 'photo' ? 'photo' : ''}">${inner}<span class="arrow-btn">${arrowSvg}</span></div>`;
  }

  function projectCard(p) {
    return `<a class="card" href="#${p.id}" aria-label="${esc(p.name)}: ${esc(p.short)}">
      ${cardMedia(p)}
      <div class="card-body">
        <div class="card-title">${mono(p.mono, p.color)}<span>${esc(p.name)}</span></div>
        <p>${esc(p.short)}</p>
        <div class="card-meta"><span class="tag">${esc(p.tag)}</span><span class="tag">${esc(p.when)}</span></div>
      </div></a>`;
  }

  function smallBuildsCard() {
    return `<div class="card" style="cursor:default">
      <div class="card-media" style="background:var(--bg-tile);align-content:center;padding:20px">
        <div class="mini-list" style="width:100%;background:var(--bg)">
          ${SMALL_BUILDS.map((b) => `<a class="mini" href="${b.href}"${ext(b.href)}><span class="mono" style="background:#3a3f4b">${b.name[0]}</span><div><h4>${esc(b.name)}</h4><p>${esc(b.text)}</p></div><span class="go">Open ↗</span></a>`).join('')}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${mono('+', '#6c7180')}<span>Small things I built for myself</span></div>
        <p>Weekend tools I use. Both live on Vercel.</p>
        <div class="card-meta"><span class="tag">Side builds</span><span class="tag">2026</span></div>
      </div></div>`;
  }

  function hackCard(wide) {
    const p = PROJECTS[1];
    return `<article class="hack" ${wide ? 'style="grid-template-columns:minmax(0,1.1fr) minmax(0,1fr)"' : ''}>
      <div class="hack-photos">${p.mediaPair.map((m) => `<img src="${IMG + m.src}" alt="${esc(m.alt)}" loading="lazy">`).join('')}</div>
      <div class="hack-body">
        <div class="place">1st Place · TurinTech AI track</div>
        <div class="where">UKFinnovator Hackathon · Imperial College London</div>
        <p>A liquidity agent for a Uniswap V3-style pool, built on a Hidden Markov Model I wrote from scratch in NumPy. Beat every baseline on the hidden test seeds.</p>
        <div class="hack-foot"><span>June 2026</span><a class="link-u" href="#defi">Read more →</a></div>
      </div></article>`;
  }

  /* ------------------------------------------------------------------ */
  /* Views                                                                */
  /* ------------------------------------------------------------------ */
  function viewHome() {
    return `<div class="view">
      <section class="wrap hero">
        <div class="hero-lines">
          <h1 class="big">David <span>studied</span> Computer Science <span>@</span> Leicester</h1>
          <p class="sub">Graduated with <b>First-Class Honours</b>, 2026.<br>Previously @ <b>Rolls-Royce</b> and <b>Boom Technologies</b>.<br>Now looking for a new-grad role where I actually get to build.</p>
          <div class="hero-cta"><a class="btn-dark" href="#projects">See my work</a><a class="btn-light" href="#resume">Resume</a></div>
        </div>
        <div class="photo-pile" id="pile">
          <div class="drag-note">pssst, you can drag these
            <svg viewBox="0 0 44 30" aria-hidden="true"><path d="M40 4C34 18 20 24 6 22"/><path d="M12 16 5 22l8 4"/></svg></div>
          <figure class="polaroid" data-x=".44" data-y="54" data-r="7"><img src="${IMG}boom.jpg" alt="Boom Technologies on the Nasdaq screen in Times Square"><figcaption>Boom on the big screen</figcaption></figure>
          <figure class="polaroid" data-x=".02" data-y="84" data-r="-8"><img src="${IMG}hackathon-pitch.jpg" alt="Pitching at the UKFinnovator hackathon at Imperial"><figcaption>pitching at Imperial</figcaption></figure>
          <figure class="polaroid" data-x=".24" data-y="120" data-r="2"><img src="${IMG}profile.jpg" alt="David Nkpa"><figcaption>hi, I'm David</figcaption></figure>
        </div>
      </section>

      <section class="wrap">
        <div class="center-head">
          <span class="pill"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>Built &amp; Shipped</span>
          <h2>Selected Work</h2>
          <p>Things I've built, from hackathon agents to data pipelines.</p>
        </div>
        <div class="cards">${PROJECTS.slice(0, 4).map(projectCard).join('')}</div>
        <a class="explore" href="#projects">
          <div><h3>Explore all projects</h3><p>The cloud setup, side builds and the full write-ups.</p></div>
          <span class="btn-light">View all ${arrowSvg.replace('<svg', '<svg width="14" height="14" style="fill:none;stroke:currentColor;stroke-width:2"')}</span>
        </a>
      </section>

      <section class="wrap">
        <div class="center-head">
          <span class="pill"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>Built in about a day</span>
          <h2>Hackathons &amp; side builds</h2>
          <p>Coding under pressure, and the small tools I use every week.</p>
        </div>
        <div class="hacks">${hackCard(false)}${smallBuildsCard()}</div>
      </section>
    </div>`;
  }

  function viewAbout() {
    return `<div class="view">
      <section class="wrap about-hero">
        <div class="lanyard-stage" id="lanyard">
          <div class="spin-label" aria-hidden="true">
            <svg viewBox="0 0 120 120"><defs><path id="circ" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0"/></defs>
              <text><textPath href="#circ">PLAY ✦ WITH ✦ THE ✦ LANYARD ✦</textPath></text></svg>
          </div>
          <canvas aria-hidden="true"></canvas>
          <div class="badge" role="img" aria-label="ID badge: David Nkpa, Computer Science, University of Leicester. Drag it around.">
            <div class="badge-slot"></div>
            <div class="badge-photo"><img src="${IMG}profile.jpg" alt=""><span class="badge-uni">UNIVERSITY OF<br>LEICESTER</span></div>
            <div class="badge-foot">
              <div><div class="badge-name">David<br>Nkpa</div><div class="badge-sub">Computer Science<br>First-Class Honours · 2026</div></div>
              <div class="badge-id">LDN<br>2023–26</div>
            </div>
          </div>
        </div>
        <div class="intro">
          <h2 class="eyebrow">Introduction</h2>
          <h1><span class="g">I'm a CompSci</span> Graduate, Builder, <span class="g">and</span> Analyst <span class="g">based in</span> London.</h1>
          <div class="intro-copy">
            <p>I like building things I wish already existed, usually somewhere between <b>AI, finance and data</b>. Sometimes that's a hackathon agent that manages liquidity on its own. Sometimes it's a tool that tells you which AI-written fix to trust.</p>
            <p>I've also sat on the business side. At Rolls-Royce I turned a messy year of cost data into a 5-slide deck management could act on, and at Boom I shipped analytics features and wrote the LLM report for the CEO. So I care a lot about whether the person on the other end can actually read what I build.</p>
            <p>Just finished my BSc at Leicester with a First. Now looking for a <b>new-grad role where I actually get to build</b>. If that sounds like your team, just email me.</p>
          </div>
        </div>
      </section>

      <section class="wrap"><div class="section">
        <h2 class="eyebrow">Education</h2>
        <div class="edu">
          <div class="edu-list">
            <div class="edu-item">
              <h3>University of Leicester</h3>
              <p class="deg">BSc (Hons) Computer Science, First-Class Honours</p>
              <p class="when">Sep 2023 – Jun 2026</p>
              <ul>
                <li>Modules: Big Data and Predictive Analytics, Data Analytics, Databases and Domain Modelling, Intro to Cloud Computing.</li>
                <li>Citizens of Change 100 Scholarship (2023).</li>
                <li>Course rep for 200+ students in the School of Computing &amp; Mathematics.</li>
              </ul>
            </div>
            <div class="edu-item small">
              <h3>British School of Lomé</h3>
              <p class="deg">IGCSEs: 7 A* and 1 A, including Maths, ICT and Physics</p>
              <p class="when">Aug 2017 – Jun 2021 · Lomé, Togo</p>
              <ul><li>Duke of Edinburgh (Bronze).</li></ul>
            </div>
          </div>
          <figure class="photo-card"><img src="${IMG}hackathon-group.jpg" alt="Group photo at the UKFinnovator hackathon, Imperial College London" loading="lazy"><figcaption>UKFinnovator hackathon at Imperial, June 2026</figcaption></figure>
        </div>
      </div></section>

      <section class="wrap"><div class="section">
        <h2 class="eyebrow">Experience</h2>
        <div class="exp">
          <div class="roles">
            ${ROLES.map((r) => `<div class="role">${r.logo ? `<img class="logo" src="${IMG}logos/${r.logo}" alt="${esc(r.co)} logo" width="40" height="40">` : mono(r.mono, r.color)}<div>
              <h3>${esc(r.title)}</h3><div class="co">${esc(r.co)} · ${esc(r.place)}</div><div class="when">${esc(r.when)}</div>
              <p>${esc(r.text)}</p></div></div>`).join('')}
          </div>
          <div class="mosaic">
            <figure><img src="${IMG}spectra-analysis.png" alt="Spectra stock analysis screen" loading="lazy"><figcaption>Spectra (final-year project)</figcaption></figure>
            <figure class="fit dark"><img src="${IMG}agenclave-loop.png" alt="Agenclave trust loop" loading="lazy"><figcaption>Agenclave</figcaption></figure>
            <figure class="fit"><img src="${IMG}crime-london-map.png" alt="London crime map" loading="lazy"><figcaption>London crime map</figcaption></figure>
            <figure><img src="${IMG}hackathon-pitch.jpg" alt="Pitching at Imperial" loading="lazy"><figcaption>UKFinnovator pitch</figcaption></figure>
          </div>
        </div>
      </div></section>

      <section class="wrap"><div class="section">
        <h2 class="eyebrow">Technologies &amp; Skills</h2>
        <div class="skills">
          ${SKILLS.map((s) => `<div class="skill-card"><h3>${esc(s.title)}</h3><div class="chips">${s.items.map(([n, c]) => `<span class="chip"><i style="--c:${c}"></i>${esc(n)}</span>`).join('')}</div></div>`).join('')}
        </div>
      </div></section>
    </div>`;
  }

  function viewProjects() {
    return `<div class="view">
      <section class="wrap">
        <div class="center-head">
          <span class="pill"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>From idea to something that runs</span>
          <h2>Featured Work</h2>
          <p>Click any project for the full story, pictures and code.</p>
        </div>
        <div class="cards">${PROJECTS.map(projectCard).join('')}${smallBuildsCard()}</div>
      </section>
      <section class="wrap">
        <div class="center-head">
          <span class="pill"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>About a day to build and pitch</span>
          <h2>Hackathons</h2>
        </div>
        <div class="hacks" style="grid-template-columns:1fr">${hackCard(true)}</div>
        <p class="soon">More projects will be added soon...</p>
      </section>
    </div>`;
  }

  function viewDetail(p) {
    const i = PROJECTS.indexOf(p);
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    let media = '';
    if (p.mediaPair) media = `<div class="detail-media pair">${p.mediaPair.map((m) => `<img src="${IMG + m.src}" alt="${esc(m.alt)}">`).join('')}</div>`;
    else if (p.card.type === 'mock-fin') media = `<div class="detail-media pad ${p.tint}">${finMock()}</div>`;
    else if (p.card.type === 'aws') media = `<div class="detail-media pad ${p.tint}">${awsDiagram()}</div>`;
    const fig = (m) => `<figure class="detail-media ${m.dark ? 'dark' : 'white'}"><img src="${IMG + m.src}" alt="${esc(m.alt)}"></figure>`;
    const firstMedia = p.media ? fig(p.media[0]) : '';
    const moreMedia = p.media ? p.media.slice(1).map(fig).join('') : '';
    return `<div class="view wrap"><article class="detail">
      <a class="back" href="#projects">← All projects</a>
      <header class="detail-head">
        <div class="card-meta"><span class="tag">${esc(p.tag)}</span><span class="tag">${esc(p.when)}</span></div>
        <h1>${esc(p.name)}</h1>
        <p class="lede">${esc(p.short)}</p>
      </header>
      <div class="facts">
        <div class="fact"><span>When</span><b>${esc(p.when)}</b></div>
        <div class="fact"><span>Built with</span><b>${esc(p.stack)}</b></div>
        <div class="fact"><span>Result</span><b>${esc(p.result)}</b></div>
      </div>
      ${media}${firstMedia}
      ${p.mediaNote ? `<p class="note">${esc(p.mediaNote)}</p>` : ''}
      <div class="prose">${p.prose.map((t) => `<p>${esc(t)}</p>`).join('')}</div>
      ${moreMedia}
      ${p.links.length ? `<div class="links">${p.links.map((l, k) => `<a class="${k === 0 ? 'btn-dark' : 'btn-light'}" href="${l.href}"${ext(l.href)}>${esc(l.label)} ↗</a>`).join('')}</div>` : ''}
      <nav class="next" aria-label="More projects">
        <a href="#${prev.id}"><span>Previous</span><b>${esc(prev.name)}</b></a>
        <a href="#${next.id}"><span>Next</span><b>${esc(next.name)}</b></a>
      </nav>
    </article></div>`;
  }

  function viewResume() {
    const li = (a) => `<ul>${a.map((t) => `<li>${t}</li>`).join('')}</ul>`;
    const row = (l, r, il, ir) => `<div class="row"><b>${l}</b><span>${r}</span></div>${il ? `<div class="row" style="margin-top:0"><i>${il}</i><i>${ir || ''}</i></div>` : ''}`;
    return `<div class="view wrap">
      <div class="resume-head">
        <div><p class="eyebrow">Resume</p><h1>David Nkpa</h1><p class="sub">Computer Science graduate · London</p><p class="upd">Last updated: Oct 2026</p></div>
        <div class="links"><a class="btn-dark" href="${CV_PDF}" download>Download PDF</a><a class="btn-light" href="${CV_PDF}" target="_blank" rel="noopener">Open in new tab ↗</a></div>
      </div>
      <div class="paper-wrap"><div class="paper">
        <h2>David Nkpa</h2>
        <p class="contact">+44 7442 831978 | <a href="mailto:${EMAIL}">${EMAIL}</a> | <a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a> | <a href="${GITHUB}" target="_blank" rel="noopener">GitHub</a> | London, UK</p>
        <h3>Profile</h3>
        <p>Computer Science graduate (First-Class Honours) with hands-on experience building, analysing and pitching AI-enabled solutions across regulated and fast-moving environments. Strong technical foundations, structured thinking and clear communication with non-technical people.</p>
        <h3>Work Experience</h3>
        ${row('Finance Analyst', 'Apr 2026 – Jun 2026', 'Rolls-Royce', 'London, UK')}
        ${li(['Consolidated a 12-month cost dataset, combining 6 months of actuals and forecasts into clean analysis for management review.', 'Built an Excel model calculating monthly % variances, cumulative spend movement, run-rate trends and forecast accuracy across departmental cost lines.', 'Converted the analysis into a 5-slide executive deck with charts and plain-language commentary supporting 3 recommended actions.'])}
        ${row('Software Engineering Intern', 'Sep 2025 – Oct 2025', 'Boom Technologies (Fintech)', 'London, UK')}
        ${li(['Built 10+ admin analytics features in a React back-office system, improving operational data visibility and enabling faster decisions.', 'Authored a CEO-ready strategy report on LLM options and sustainable data-centre architectures, covering model trade-offs, data governance and deployment constraints.', 'Produced technical documentation for proposed AI solutions, covering architecture decisions and integration considerations.', 'Worked across teams to clarify requirements, ship features and explain trade-offs under time constraints.'])}
        ${row('Research Intern', 'Jun 2025 – Jul 2025', '181st Street Communications', 'London, UK (remote)')}
        ${li(['Built website prototypes focused on UX and user-journey optimisation.', 'Implemented digital analytics and user-research findings to optimise onboarding flows, improving sign-up conversion by 12% on test pages.', 'Converted qualitative and quantitative insights into clear recommendations and test plans for non-technical stakeholders.'])}
        ${row('Information Technology Intern', 'Jul 2022 – Aug 2022', 'Ecobank Transnational Incorporated', 'Lomé, Togo')}
        ${li(['Supported critical banking systems (SWIFT, AML tooling) in a regulated environment, resolving 30+ priority network incidents under strict escalation and audit-trail requirements.', 'Maintained resolution logs and incident documentation to speed up future troubleshooting and meet internal governance standards.'])}
        <h3>Projects</h3>
        ${row('Live DeFi Liquidity Agent', 'Jun 2026', 'Python, Hidden Markov Models, NumPy')}
        ${li(['1st place, TurinTech AI track, UKFinnovator London Hackathon 2026 (Imperial College London); pitched to judges from King’s College London and TurinTech AI.', 'Built an HMM agent in pure NumPy detecting three market regimes in real time to manage concentrated liquidity in a Uniswap V3-style AMM simulation.', 'Rebalanced only when profit exceeded gas cost; outperformed all provided baselines on hidden evaluation seeds.'])}
        ${row('AI Financial Decision Assistant (Final-Year Project)', 'Sep 2025 – May 2026', 'Python, FastAPI, LLMs')}
        ${li(['Full-stack web app for retail investors to analyse US stocks using volatility, drawdown and risk/return metrics.', 'Python/FastAPI analytics service ingesting market data and computing indicators with Pandas/NumPy.', 'Agentic LLM layer (Claude and OpenAI) generating grounded, plain-language stock comparisons.'])}
        ${row('Metropolitan Police Crime Prediction Model', 'Mar 2026', 'Python, Pandas, scikit-learn, Random Forest, K-Means, MapReduce')}
        ${li(['Pipeline on 1.1M+ crime records aggregated into 56,571 neighbourhood-month rows.', 'Lagged counts, crime-type ratios and Shannon entropy features with leakage checks and time-based splits.', 'Random Forest reached 0.934 test R²; previous-month crime count was the strongest predictor.'])}
        ${row('Private Cloud on AWS', 'Nov 2025 – Dec 2025', 'AWS, EKS, Kubernetes')}
        ${li(['Fault-tolerant EKS architecture with horizontal scaling and self-healing workloads.', 'Network isolation with VPCs, public/private subnets and NAT gateways.', 'Shared state on ElastiCache (Redis), consistency-first under network partitions.'])}
        <h3>Education</h3>
        ${row('University of Leicester', 'Leicester, UK', 'BSc Computer Science, First-Class Honours', 'Sep 2023 – Jun 2026')}
        ${li(['Citizens of Change 100 Scholarship (2023).', 'Course Representative for 200+ students, School of Computing &amp; Mathematics.'])}
        ${row('The British School of Lomé', 'Lomé, Togo', 'IGCSE: 7 A* and 1 A, including Maths, ICT and Physics', 'Aug 2017 – Jun 2021')}
        ${li(['Duke of Edinburgh (Bronze) Award.'])}
        <h3>Skills &amp; Languages</h3>
        ${li(['<b>Technical:</b> Python (Pandas/NumPy), React, SQL, HTML/CSS, REST APIs, AWS', '<b>AI:</b> LLMs, agents, prompt engineering, Claude and OpenAI APIs', '<b>Business:</b> Excel modelling, PowerPoint, Figma, Canva', '<b>Languages:</b> English (native), French (working)'])}
      </div></div>
    </div>`;
  }

  /* ------------------------------------------------------------------ */
  /* Lanyard: verlet rope + two-point rigid card                          */
  /* ------------------------------------------------------------------ */
  function mountLanyard(stage) {
    const canvas = $('canvas', stage);
    const badge = $('.badge', stage);
    const ctx = canvas.getContext('2d');
    const BW = 248;
    const N = 12;
    let W = 0, H = 0, SEG = 22, LCB = 300, anchor = { x: 0, y: 0 };
    let pts = [];
    let drag = null;
    let raf = 0, last = 0, acc = 0;

    const P = (x, y, inv) => ({ x, y, px: x, py: y, inv });

    function layout(fresh) {
      const r = stage.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const bh = badge.offsetHeight;
      LCB = bh * 0.86;
      SEG = Math.max(9, Math.min(24, (H - bh - 50) / (N - 1)));
      anchor = { x: Math.min(W * 0.6, W - 40), y: -12 };
      if (fresh || !pts.length) {
        // start swung out to the left so it settles in on load
        const sx = reduced ? 0 : -1.6, sy = 1;
        const len = Math.hypot(sx, sy);
        pts = [];
        for (let i = 0; i < N; i++) {
          const d = (i * SEG) / len;
          pts.push(P(anchor.x + sx * d * 0.55, anchor.y + sy * d * 0.9, i === 0 ? 0 : 1));
        }
        if (reduced) pts.forEach((p, i) => { p.x = p.px = anchor.x; p.y = p.py = anchor.y + i * SEG; });
        const c = pts[N - 1]; c.inv = 0.35;
        pts.push(P(c.x + (reduced ? 0 : 60), c.y + LCB, 0.35));
      } else {
        pts[0].x = pts[0].px = anchor.x; pts[0].y = pts[0].py = anchor.y;
      }
    }

    function step() {
      const g = 0.55;
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i];
        if (p.inv === 0) continue;
        const damp = i >= N - 1 ? 0.988 : 0.975;
        const vx = (p.x - p.px) * damp, vy = (p.y - p.py) * damp;
        p.px = p.x; p.py = p.y;
        p.x += vx; p.y += vy + g;
      }
      for (let k = 0; k < 14; k++) {
        for (let i = 0; i < N - 1; i++) link(pts[i], pts[i + 1], SEG);
        link(pts[N - 1], pts[N], LCB);
        // keep the card on stage
        for (let i = 1; i < pts.length; i++) {
          const p = pts[i];
          if (p.inv === 0) continue;
          p.x = Math.max(-40, Math.min(W + 40, p.x));
          p.y = Math.min(H + 120, p.y);
        }
      }
    }

    function link(a, b, len) {
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 0.0001;
      const w = a.inv + b.inv;
      if (!w) return;
      const diff = (d - len) / d / w;
      a.x += dx * diff * a.inv; a.y += dy * diff * a.inv;
      b.x -= dx * diff * b.inv; b.y -= dy * diff * b.inv;
    }

    function draw() {
      const cs = getComputedStyle(document.documentElement);
      const strap = cs.getPropertyValue('--strap').trim() || '#121317';
      const edge = cs.getPropertyValue('--strap-edge').trim() || '#2b2d34';
      ctx.clearRect(0, 0, W, H);
      const rope = pts.slice(0, N);
      const path = () => {
        ctx.beginPath();
        ctx.moveTo(rope[0].x, rope[0].y);
        for (let i = 1; i < rope.length - 1; i++) {
          const mx = (rope[i].x + rope[i + 1].x) / 2, my = (rope[i].y + rope[i + 1].y) / 2;
          ctx.quadraticCurveTo(rope[i].x, rope[i].y, mx, my);
        }
        const e = rope[rope.length - 1];
        ctx.lineTo(e.x, e.y - 22);
      };
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      path(); ctx.strokeStyle = strap; ctx.lineWidth = 24; ctx.stroke();
      path(); ctx.strokeStyle = edge; ctx.lineWidth = 1.2; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
      // clasp
      const c = pts[N - 1], b = pts[N];
      const ang = Math.atan2(b.x - c.x, b.y - c.y);
      ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(-ang);
      ctx.fillStyle = '#8f96a3'; ctx.strokeStyle = '#5d6370'; ctx.lineWidth = 1.5;
      roundRect(-11, -34, 22, 16, 4); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.lineWidth = 4; ctx.strokeStyle = '#9aa1ad';
      ctx.moveTo(0, -18); ctx.lineTo(0, -6); ctx.stroke();
      ctx.beginPath(); ctx.lineWidth = 3.5; ctx.arc(0, 0, 7, Math.PI * 1.15, Math.PI * 1.85 + Math.PI); ctx.stroke();
      ctx.restore();
      // card
      badge.style.transform = `translate(${c.x - BW / 2}px, ${c.y + 2}px) rotate(${-ang}rad)`;
    }

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
    }

    function loop(t) {
      if (!stage.isConnected) { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); return; }
      const dt = Math.min(64, t - (last || t)); last = t; acc += dt;
      let n = 0;
      while (acc >= 16.67 && n < 4) { step(); acc -= 16.67; n++; }
      draw();
      raf = requestAnimationFrame(loop);
    }

    function local(e) { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }

    badge.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      badge.setPointerCapture(e.pointerId);
      const m = local(e), c = pts[N - 1];
      drag = { ox: m.x - c.x, oy: m.y - c.y };
      c.inv = 0;
    });
    badge.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const m = local(e), c = pts[N - 1];
      let tx = m.x - drag.ox, ty = m.y - drag.oy;
      const max = SEG * (N - 1) * 1.04;
      const dx = tx - anchor.x, dy = ty - anchor.y, d = Math.hypot(dx, dy);
      if (d > max) { tx = anchor.x + dx / d * max; ty = anchor.y + dy / d * max; }
      c.px = c.x; c.py = c.y; c.x = tx; c.y = ty;
    });
    const release = () => { if (!drag) return; drag = null; pts[N - 1].inv = 0.35; };
    badge.addEventListener('pointerup', release);
    badge.addEventListener('pointercancel', release);

    const onResize = () => layout(false);
    window.addEventListener('resize', onResize);
    layout(true);
    if (reduced) { for (let i = 0; i < 240; i++) step(); }
    draw();
    raf = requestAnimationFrame(loop);
  }

  /* ------------------------------------------------------------------ */
  /* Draggable photo pile on the home page                                */
  /* ------------------------------------------------------------------ */
  function mountPile(pile) {
    let z = 10;
    const items = $$('.polaroid', pile);
    const W = pile.clientWidth;
    items.forEach((el, i) => {
      const s = { x: parseFloat(el.dataset.x) * W, y: parseFloat(el.dataset.y), r: parseFloat(el.dataset.r) };
      el._s = s; el.style.zIndex = i + 1;
      const put = () => { el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg)`; };
      put();
      let start = null;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); el.setPointerCapture(e.pointerId);
        el.style.zIndex = ++z; el.style.transition = 'none';
        start = { mx: e.clientX, my: e.clientY, x: s.x, y: s.y };
      });
      el.addEventListener('pointermove', (e) => {
        if (!start) return;
        const pw = pile.clientWidth, ph = pile.clientHeight;
        s.x = Math.max(-60, Math.min(pw - el.offsetWidth + 60, start.x + e.clientX - start.mx));
        s.y = Math.max(-40, Math.min(ph - el.offsetHeight + 40, start.y + e.clientY - start.my));
        s.r = Math.max(-12, Math.min(12, (e.clientX - start.mx) / 18));
        put();
      });
      const end = () => {
        if (!start) return; start = null;
        el.style.transition = 'transform .35s cubic-bezier(.2,.8,.2,1.2), box-shadow .2s';
        s.r = Math.round((Math.random() * 14 - 7)); put();
      };
      el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Router                                                               */
  /* ------------------------------------------------------------------ */
  const TITLES = { home: 'David Nkpa', about: 'About · David Nkpa', projects: 'Projects · David Nkpa', resume: 'Resume · David Nkpa' };
  let current = '';

  function render() {
    let key = (location.hash || '').replace(/^#/, '') || 'home';
    if (key === 'app') { $('#app').focus(); return; }
    const project = PROJECTS.find((p) => p.id === key);
    if (!project && !TITLES[key]) key = 'home';
    if (key === current) return;
    current = key;
    const app = $('#app');
    if (project) app.innerHTML = viewDetail(project);
    else app.innerHTML = { home: viewHome, about: viewAbout, projects: viewProjects, resume: viewResume }[key]();
    document.title = project ? project.name + ' · David Nkpa' : TITLES[key];
    const navKey = project ? 'projects' : key;
    $$('.nav-links a').forEach((a) => a.classList.toggle('active', a.dataset.route === navKey));
    window.scrollTo(0, 0);
    const lan = $('#lanyard'); if (lan) mountLanyard(lan);
    const pile = $('#pile'); if (pile) mountPile(pile);
  }

  /* ------------------------------------------------------------------ */
  /* Chrome: nav, theme, modal, copy                                      */
  /* ------------------------------------------------------------------ */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });

  $('#themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('dn-theme', next); } catch (e) { /* storage blocked */ }
  });

  const modal = $('#talk');
  const openModal = () => { modal.hidden = false; $('[data-copy]', modal).focus(); };
  const closeModal = () => { modal.hidden = true; $('#talkBtn').focus(); };
  $('#talkBtn').addEventListener('click', openModal);
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-copy]');
    if (!b) return;
    const text = b.dataset.copy;
    const fallback = () => {
      const target = b.parentElement.querySelector('.sel');
      if (target) { const r = document.createRange(); r.selectNodeContents(target); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      toast('Selected. Press Ctrl+C to copy');
    };
    try {
      navigator.clipboard.writeText(text).then(() => toast('Email copied'), fallback);
    } catch (err) { fallback(); }
  });

  window.addEventListener('hashchange', render);
  render();
  onScroll();
})();
