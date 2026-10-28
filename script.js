const projects = [
  { id: 'picl', filter: 'uiux', category: '모바일 앱', platform: 'MOBILE', date: '2026.01 - 2026.02', title: 'PICL 신규기획', image: 'images/projects/picl/01-cover.webp', description: '사진 보정을 즐거운 소셜 콘텐츠로 확장하는 단체사진 동시보정 서비스입니다.', href: 'picl.html' },
  { id: 'compose', filter: 'uiux', category: '모바일 앱', platform: 'MOBILE', date: '2026.03', title: 'COMPOSE 앱 리디자인', image: 'images/projects/compose/01-cover.webp', description: '반복 주문 사용자를 위한 퀵오더 중심의 모바일 UX 개선 프로젝트입니다.', href: 'compose.html' },
  { id: 'groundseesaw', filter: 'uiux', category: '반응형 웹', platform: 'WEB / MOBILE', date: '2026.05', title: '그라운드시소 반응형 웹 리디자인', image: 'images/projects/groundseesaw/01-cover.webp', description: '전시 정보를 직관적으로 탐색하고 예약까지 이어지는 웹·모바일 경험을 설계했습니다.', href: 'groundseesaw.html' },
  { id: 'runon', filter: 'dev', category: '웹 개발', platform: 'WEB', date: '09.19 - 10.28', title: 'RUNON 마라톤 플랫폼', image: 'images/projects/runon/runon-01.jpg', description: '클라우드 기반 Open API로 러닝 크루와 마라톤 정보를 연결하는 웹 플랫폼입니다.', href: 'runon.html' },
  { id: 'dandi', filter: 'dev', category: '웹 개발', platform: 'WEB', date: '2024.08.29 - 09.07', title: 'DANDI 부산 축제·맛집 웹사이트', image: 'images/projects/dandi/dandi-01.jpg', description: '공공데이터와 오픈 API로 부산 축제와 맛집 정보를 소개하는 웹사이트입니다.', href: 'dandi.html' },
  { id: 'goodal-ai', filter: 'ai', category: 'AI 콘텐츠 디자인', platform: 'MIDJOURNEY · PHOTOSHOP', date: '430PX BASE', title: '구달 비타C 청귤 알파 크림', image: 'images/projects/goodal-ai/01-cover.jpg', description: '미드저니와 포토샵으로 제작한 청귤 비타C 제품의 세로형 프로모션 콘텐츠입니다.', href: 'goodal-ai.html' },
];

const stage = document.querySelector('#portfolio-stage');
const intro = document.querySelector('#portfolio-intro');
const count = document.querySelector('#intro-count');
const grid = document.querySelector('#project-grid');
const tabs = [...document.querySelectorAll('.filter-tab')];
const countLabel = document.querySelector('#projects-heading span');
let activeFilter = 'all';

// Small, independently drifting stars on the intro screen.
const starField = document.querySelector('.intro-stars');
if (starField) {
  const starCount = window.matchMedia('(max-width: 600px)').matches ? 24 : 42;
  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('span');
    star.className = 'intro-star';
    star.style.setProperty('--x', `${Math.random() * 100}%`);
    star.style.setProperty('--y', `${Math.random() * 100}%`);
    star.style.setProperty('--size', `${Math.random() * 1.6 + 1}px`);
    star.style.setProperty('--duration', `${Math.random() * 7 + 8}s`);
    star.style.setProperty('--delay', `${Math.random() * -12}s`);
    star.style.setProperty('--drift-x', `${Math.random() * 34 - 17}px`);
    star.style.setProperty('--drift-y', `${Math.random() * 34 - 17}px`);
    starField.append(star);
  }
}

const profileBurst = document.querySelector('.profile-burst');
if (profileBurst) {
  const confettiColors = ['#b9ff80', '#d7ffb5', '#ffffff', '#86d958'];
  for (let i = 0; i < 42; i += 1) {
    const angle = (Math.PI * 2 * i) / 42 + (Math.random() - 0.5) * 0.3;
    const distance = 115 + Math.random() * 170;
    const piece = document.createElement('i');
    piece.className = 'profile-confetti';
    piece.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    piece.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
    piece.style.setProperty('--spin', `${Math.random() * 720 - 360}deg`);
    piece.style.setProperty('--confetti-color', confettiColors[i % confettiColors.length]);
    piece.style.setProperty('--confetti-delay', `${Math.random() * 100}ms`);
    profileBurst.append(piece);
  }
}

function renderProjects() {
  const shown = projects.filter((project) => activeFilter === 'all' || project.filter === activeFilter);
  countLabel.textContent = `(${shown.length})`;
  if (shown.length === 0) {
    grid.innerHTML = '<p class="project-empty" role="status">AI 프로젝트를 준비 중입니다.</p>';
    return;
  }
  grid.innerHTML = shown.map((project) => {
    const projectHref = project.href;
    return `
    <article class="project-card" id="project-${project.id}">
      <a class="project-card-link" href="${projectHref}" aria-label="${project.title} 자세히 보기">
        <span class="project-image-link">
          <img class="project-image" src="${project.image}" alt="" loading="lazy" />
        </span>
        <div class="project-meta"><span class="project-kind">${project.category}</span><span class="project-platform">${project.platform}</span><span class="project-date">${project.date}</span></div>
        <h2 class="project-name">${project.title}</h2>
        <p class="project-description">${project.description}</p>
      </a>
    </article>`;
  }).join('');
}

tabs.forEach((tab) => tab.addEventListener('click', () => {
  activeFilter = tab.dataset.filter;
  tabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  renderProjects();
}));

document.querySelectorAll('.profile-filter-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    document.querySelector(`.filter-tab[data-filter="${trigger.dataset.filterTarget}"]`)?.click();
  });
});
document.querySelector('.projects-reset').addEventListener('click', () => {
  document.querySelector('.filter-tab[data-filter="all"]').click();
});

function showPortfolio() {
  stage.classList.add('is-ready');
  intro.classList.add('is-gone');
}

let secondsLeft = 3;
const introTimer = window.setInterval(() => {
  secondsLeft -= 1;
  count.textContent = String(Math.max(secondsLeft, 0));
  if (secondsLeft <= 0) {
    window.clearInterval(introTimer);
    showPortfolio();
  }
}, 1000);

document.querySelector('.intro-skip').addEventListener('click', () => {
  window.clearInterval(introTimer);
  showPortfolio();
});

const introEnter = document.querySelector('.intro-enter');
const enterPortfolio = () => {
  window.clearInterval(introTimer);
  showPortfolio();
};
introEnter.addEventListener('click', enterPortfolio);
introEnter.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    enterPortfolio();
  }
});

renderProjects();

const identity = document.querySelector('.identity');
const nameTrigger = document.querySelector('.name-trigger');
nameTrigger.addEventListener('click', () => {
  const isOpen = identity.classList.toggle('show-photo');
  nameTrigger.setAttribute('aria-expanded', String(isOpen));
});
document.addEventListener('click', (event) => {
  if (!identity.contains(event.target)) {
    identity.classList.remove('show-photo');
    nameTrigger.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    identity.classList.remove('show-photo');
    nameTrigger.setAttribute('aria-expanded', 'false');
  }
});
