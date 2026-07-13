const intro = document.getElementById("intro");
const introSkip = document.getElementById("introSkip");
const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
const year = document.getElementById("year");

const hideIntro = () => {
  intro.classList.add("hidden");
  window.setTimeout(() => intro.remove(), 800);
};

if (sessionStorage.getItem("djcfour-intro-seen")) {
  hideIntro();
} else {
  window.setTimeout(() => {
    sessionStorage.setItem("djcfour-intro-seen", "true");
    hideIntro();
  }, 2900);
}

introSkip?.addEventListener("click", () => {
  sessionStorage.setItem("djcfour-intro-seen", "true");
  hideIntro();
});

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const open = menuToggle.classList.toggle("active");
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

year.textContent = new Date().getFullYear();
