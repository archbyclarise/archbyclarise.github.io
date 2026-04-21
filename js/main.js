/* Modal images: pages from 042525_PORTFOLIO_Lutiva.pdf (see index.html for full 26-sheet gallery). */
const PDF = 'assets/images/pdf-pages';

/* ── Project Data ─────────────────────────────────────── */
const projects = {
  ekos: {
    title: "Ekós — North Triangle, Quezon City",
    subtitle: "Urban Commercial Framework · Thesis Project",
    desc: "Ekós (from Eco + Urbis) is a mixed-use commercial complex that aims to expose people from high-density urban areas to a fresher and greener marketplace. The project is located in the Central Business District of Quezon City and consists of several components: the Ekós Towers, Agrimall, Agricentre, Apartments, and Ekós Park — all anchored in a radial site planning concept inspired by the chloroplast.",
    banner: `${PDF}/page-02.jpg`,
    gallery: [
      `${PDF}/page-09.jpg`,
      `${PDF}/page-10.jpg`,
      `${PDF}/page-11.jpg`,
    ],
    meta: [
      { label: "Location", value: "North Triangle, Quezon City" },
      { label: "Duration", value: "Jan. 28 – Apr. 29, 2023" },
      { label: "Type", value: "Urban Commercial / Thesis" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Lumion 10", "Adobe Photoshop"]
  },
  mercado: {
    title: "Mercado de Bacolor",
    subtitle: "Mixed-Use Commercial Development",
    desc: "Mercado de Bacolor is a proposed mixed-use commercial development located in Bacolor, Pampanga, which seeks to commemorate the town's rich history through its architecture and public spaces. Drawing inspiration from Spanish Colonial Architecture, the project pays homage to Bacolor's colonial roots while embracing its future. The complex includes a Museum, Indoor Food Bazaar/Resto, Commercial Building, Apartments, Tricycle & Jeepney Terminal, and a Public Park.",
    banner: `${PDF}/page-03.jpg`,
    gallery: [
      `${PDF}/page-12.jpg`,
      `${PDF}/page-13.jpg`,
      `${PDF}/page-14.jpg`,
    ],
    meta: [
      { label: "Location", value: "Bacolor, Pampanga" },
      { label: "Type", value: "Mixed-Use Commercial" },
      { label: "Year", value: "2022" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Adobe Photoshop"]
  },
  verb: {
    title: "VE·RB — Multimodal Street Design",
    subtitle: "Downtown Throughfare · DSGN 415",
    desc: "VE·RB (from Verdant + Urb) is a proposed multimodal street design that integrates green spaces into the traditional urban road layout, providing a refreshing and accessible environment for all. Through careful planning and consideration for accessibility, VE·RB aims to enhance the overall livability and sustainability of the surrounding area while serving as a catalyst for urban regeneration. Features include dedicated bike lanes, wider sidewalks, enhanced public transport infrastructure, solar-powered street lights, and permeable paving.",
    banner: `${PDF}/page-04.jpg`,
    gallery: [
      `${PDF}/page-15.jpg`,
      `${PDF}/page-16.jpg`,
      `${PDF}/page-17.jpg`,
    ],
    meta: [
      { label: "Duration", value: "Jan. 17–28, 2022" },
      { label: "Type", value: "Urban Design / Street Planning" },
      { label: "Course", value: "DSGN 415" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Enscape", "Adobe Photoshop"]
  },
  beach: {
    title: "Sukgisan Beach Resort",
    subtitle: "Hospitality Complex · Resort Design",
    desc: "A full-scale resort development featuring a 3-Star Hotel, Specialty Restaurant, Two-Bedroom Resort Villas, Tiny Houses, Glamping Cabins, and associated amenity structures. The master development plan responds to the natural coastal topography, with structures arranged to maximize ocean views and minimize environmental impact. The design vocabulary draws from vernacular Filipino tropical architecture with contemporary refinements.",
    banner: `${PDF}/page-05.jpg`,
    gallery: [
      `${PDF}/page-18.jpg`,
      `${PDF}/page-19.jpg`,
      `${PDF}/page-20.jpg`,
    ],
    meta: [
      { label: "Duration", value: "Jan. 11 – Feb. 18, 2021" },
      { label: "Type", value: "Hospitality / Resort" },
      { label: "Year", value: "2021" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Lumion 10", "Adobe Photoshop"]
  },
  backyard: {
    title: "Backyard Oasis",
    subtitle: "Landscape & Pool Design",
    desc: "Sispo Oasis is a backyard landscape design project that transforms an outdoor residential area into a lush retreat. The design incorporates a swimming pool with surrounding lounges, a dining pavilion, pergola structures, and rich tropical planting. The site plan and elevation studies demonstrate a thoughtful approach to outdoor livability in a Philippine tropical climate.",
    banner: `${PDF}/page-06.jpg`,
    gallery: [
      `${PDF}/page-21.jpg`,
      `${PDF}/page-22.jpg`,
    ],
    meta: [
      { label: "Duration", value: "May 18–25, 2021" },
      { label: "Type", value: "Landscape Design" },
      { label: "Year", value: "2021" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Lumion 10", "Adobe Photoshop"]
  },
  ikigai: {
    title: "Ikigai (生きがい) — Oriental Bedroom",
    subtitle: "Interior Design · Moodboard Making",
    desc: "A moodboard and full interior design concept for an Oriental-style bedroom inspired by the Japanese philosophy of Ikigai — the reason for being. The design features traditional shoji screens, dark wood joinery, understated textiles, and a carefully curated material palette of black, white, and natural grains. Rendered through SketchUp, V-Ray, and Photoshop to achieve photorealistic quality.",
    banner: `${PDF}/page-07.jpg`,
    gallery: [
      `${PDF}/page-23.jpg`,
      `${PDF}/page-24.jpg`,
    ],
    meta: [
      { label: "Duration", value: "June 16–30, 2021" },
      { label: "Type", value: "Interior Design" },
      { label: "Style", value: "Oriental / Japanese" },
    ],
    tools: ["SketchUp Pro", "V-Ray", "Adobe Photoshop"]
  },
  interior: {
    title: "Interior Design Exercise",
    subtitle: "Contemporary Living Space Studies",
    desc: "A series of contemporary living room design studies exploring the interplay of warm wood, soft neutrals, and natural light. Multiple perspectives and camera angles reveal how the space responds to different times of day. The material palette — linen, oak, marble, and matte black accents — creates a cohesive, editorial-quality interior environment.",
    banner: `${PDF}/page-08.jpg`,
    gallery: [
      `${PDF}/page-25.jpg`,
      `${PDF}/page-26.jpg`,
    ],
    meta: [
      { label: "Type", value: "Interior Design Exercise" },
      { label: "Year", value: "2024" },
      { label: "Style", value: "Contemporary / Japandi" },
    ],
    tools: ["SketchUp Pro", "AutoCAD", "Enscape", "Adobe Photoshop"]
  }
};

/* Maps UI chips to project cards (ids: #project-<key>) */
const PROJECT_CARD_INDEX = [
  { key: 'ekos', label: 'Ekós' },
  { key: 'mercado', label: 'Mercado de Bacolor' },
  { key: 'verb', label: 'VE·RB' },
  { key: 'beach', label: 'Sukgisan Beach' },
  { key: 'backyard', label: 'Backyard Oasis' },
  { key: 'ikigai', label: 'Ikigai' },
  { key: 'interior', label: 'Interior study' },
];

const NAV_OFFSET = 88;
let projectHighlightTimer = null;

function clearProjectHighlight() {
  document.querySelectorAll('.proj-card.is-highlight').forEach((el) => el.classList.remove('is-highlight'));
  document.querySelectorAll('.project-chip.is-active').forEach((el) => el.classList.remove('is-active'));
  if (projectHighlightTimer) {
    clearTimeout(projectHighlightTimer);
    projectHighlightTimer = null;
  }
}

function setActiveChip(projectKey) {
  document.querySelectorAll('.project-chip').forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.project === projectKey);
  });
}

function highlightProjectCard(projectKey) {
  clearProjectHighlight();
  const card = document.querySelector(`.proj-card[data-project="${projectKey}"]`);
  if (!card) return;
  card.classList.add('is-highlight');
  setActiveChip(projectKey);
  projectHighlightTimer = window.setTimeout(() => {
    card.classList.remove('is-highlight');
    document.querySelectorAll('.project-chip.is-active').forEach((el) => el.classList.remove('is-active'));
    projectHighlightTimer = null;
  }, 5500);
}

function scrollToProjectCard(projectKey, { highlight = true } = {}) {
  const card = document.querySelector(`.proj-card[data-project="${projectKey}"]`);
  if (!card) return;
  const y = card.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  if (highlight) {
    window.setTimeout(() => highlightProjectCard(projectKey), 450);
  }
}

function applyProjectHashFromUrl() {
  const h = location.hash;
  if (!h.startsWith('#project-')) return;
  const key = h.slice('#project-'.length);
  if (!document.querySelector(`.proj-card[data-project="${key}"]`)) return;
  scrollToProjectCard(key, { highlight: true });
}

function mountProjectChips() {
  document.querySelectorAll('[data-project-chips]').forEach((mount) => {
    const wrap = document.createElement('div');
    wrap.className = 'project-chips';
    PROJECT_CARD_INDEX.forEach(({ key, label }) => {
      const a = document.createElement('a');
      a.href = `#project-${key}`;
      a.className = 'project-chip';
      a.dataset.project = key;
      a.textContent = label;
      wrap.appendChild(a);
    });
    mount.appendChild(wrap);
  });
}

mountProjectChips();

window.addEventListener('hashchange', () => {
  applyProjectHashFromUrl();
});

window.addEventListener('load', () => {
  if (location.hash.startsWith('#project-')) {
    window.setTimeout(applyProjectHashFromUrl, 1900);
  }
});

/* ── Modal Logic ───────────────────────────────────────── */
function openModal(key) {
  clearProjectHighlight();
  const p = projects[key];
  if (!p) return;

  const bannerImg = document.getElementById('modalBannerImg');
  bannerImg.src = p.banner;
  bannerImg.alt = p.title;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;
  document.getElementById('modalDesc').textContent = p.desc;

  const meta = document.getElementById('modalMeta');
  meta.innerHTML = p.meta.map(m =>
    `<div class="modal-meta-item">
      <div class="label">${m.label}</div>
      <div class="value">${m.value}</div>
    </div>`
  ).join('');

  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = p.gallery.map((src, i) =>
    `<img src="${src}" alt="${p.title} — image ${i + 1}" loading="lazy">`
  ).join('');

  const tools = document.getElementById('modalTools');
  tools.innerHTML = p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

/* ── Scroll Reveal ─────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Sticky Nav ────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

/* ── Hero Ken Burns ────────────────────────────────────── */
window.addEventListener('load', () => {
  document.getElementById('heroBg').classList.add('loaded');
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

/* ── Theme Toggle ──────────────────────────────────────── */
const themeBtn = document.getElementById('themeToggle');
let dark = false;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  themeBtn.textContent = dark ? '☀' : '☽';
});

/* ── Hamburger ─────────────────────────────────────────── */
const ham = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobile() {
  ham.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
ham.addEventListener('click', () => {
  const isOpen = ham.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* ── Form Submit ───────────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const orig = btn.innerHTML;
  btn.innerHTML = '✓ &nbsp; Message Sent!';
  btn.style.background = '#5C4A38';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
  }, 3000);
}

/* ── Smooth scroll for anchor links ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    if (href.startsWith('#project-')) {
      e.preventDefault();
      const key = href.slice('#project-'.length);
      history.pushState(null, '', href);
      scrollToProjectCard(key, { highlight: true });
      return;
    }

    let target;
    try {
      target = document.querySelector(href);
    } catch {
      return;
    }
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Portfolio deck carousel (#portfolio-sheets) ───────── */
function initPortfolioSlider() {
  const root = document.getElementById('portfolioSlider');
  if (!root) return;

  const track = document.getElementById('portfolioSliderTrack');
  const viewport = document.getElementById('portfolioSliderViewport');
  const prevBtn = document.getElementById('portfolioSliderPrev');
  const nextBtn = document.getElementById('portfolioSliderNext');
  const currentEl = document.getElementById('portfolioSliderCurrent');
  const captionEl = document.getElementById('portfolioSliderCaption');
  const progressFill = document.getElementById('portfolioSliderProgress');
  const slides = Array.from(root.querySelectorAll('.portfolio-slider__slide'));
  const n = slides.length;

  if (
    !track ||
    !viewport ||
    !prevBtn ||
    !nextBtn ||
    !currentEl ||
    !captionEl ||
    !progressFill ||
    n === 0
  ) {
    return;
  }

  let index = 0;

  function pad2(num) {
    return String(num).padStart(2, '0');
  }

  function goToSlide(nextIndex) {
    index = Math.max(0, Math.min(n - 1, nextIndex));
    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;

    slides.forEach((slide, j) => {
      slide.setAttribute('aria-hidden', j === index ? 'false' : 'true');
    });

    currentEl.textContent = pad2(index + 1);
    captionEl.textContent = slides[index].getAttribute('data-caption') || '';

    progressFill.style.width = `${((index + 1) / n) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === n - 1;
  }

  prevBtn.addEventListener('click', () => goToSlide(index - 1));
  nextBtn.addEventListener('click', () => goToSlide(index + 1));

  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToSlide(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToSlide(index + 1);
    }
  });

  let touchStartX = null;
  viewport.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  viewport.addEventListener(
    'touchend',
    (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].screenX - touchStartX;
      touchStartX = null;
      if (Math.abs(dx) < 48) return;
      if (dx < 0) goToSlide(index + 1);
      else goToSlide(index - 1);
    },
    { passive: true }
  );

  goToSlide(0);
}

initPortfolioSlider();
