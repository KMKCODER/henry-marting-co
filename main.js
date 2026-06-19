(function () {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = nav.querySelectorAll('a');
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const mobileBar = document.getElementById('mobileBar');
  const contactSection = document.getElementById('contact');

  let scrollPosition = 0;

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function openNav() {
    scrollPosition = window.scrollY;
    nav.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navOverlay.classList.add('visible');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
    document.body.style.top = `-${scrollPosition}px`;
    if (mobileBar) mobileBar.classList.remove('visible');
  }

  function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('visible');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);

    if (mobileBar && isMobile() && contactSection) {
      const contactRect = contactSection.getBoundingClientRect();
      const inContact = contactRect.top < window.innerHeight * 0.5;
      mobileBar.classList.toggle('visible', !inContact);
    }
  }

  function toggleNav() {
    if (nav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  }

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);

    if (mobileBar && contactSection) {
      const contactRect = contactSection.getBoundingClientRect();
      const inContact = contactRect.top < window.innerHeight * 0.5;
      mobileBar.classList.toggle('visible', !inContact);
    }
  }, { passive: true });

  navToggle.addEventListener('click', toggleNav);

  navOverlay.addEventListener('click', closeNav);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobile() && nav.classList.contains('open')) {
      closeNav();
    }
    if (mobileBar) {
      mobileBar.classList.toggle('visible', isMobile());
    }
  });

  if (mobileBar && isMobile()) {
    const contactRect = contactSection.getBoundingClientRect();
    const inContact = contactRect.top < window.innerHeight * 0.5;
    mobileBar.classList.toggle('visible', !inContact);
  }

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.hidden = false;
    contactForm.reset();
    formNote.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();
