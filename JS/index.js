document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu && !navMenu.classList.contains("hidden")) {
          navMenu.classList.add("hidden");
        }
      }
    });
  });

  // Dark/Light Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      if (themeIcon) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (themeIcon) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
      }
    }
  }

  // Check initial theme from localStorage or preferred system setting
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      const newTheme = isDark ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
});

