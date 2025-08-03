// Sosial Media
fetch("asset/JSON/socials.json")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not OK");
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("links");
    data.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.className = "link-card";
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      const icon = document.createElement("i");
      icon.className = link.iconClass;

      const content = document.createElement("div");
      content.className = "link-content";

      const h3 = document.createElement("h3");
      h3.textContent = link.app;

      const p = document.createElement("p");
      p.textContent = link.description;

      content.appendChild(h3);
      content.appendChild(p);

      a.appendChild(icon);
      a.appendChild(content);

      container.appendChild(a);
    });
  })
  .catch((err) => console.error("Fetch error:", err));

//productsPerPage

const productsPerPage = 9;
let currentPage = 1;
let products = [];

function renderProducts(page) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start, end);

  pageProducts.forEach((product) => {
    const a = document.createElement("a");
    a.href = product.url;
    a.className = "link-card product";
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const icon = document.createElement("i");
    icon.className = product.iconClass;

    const content = document.createElement("div");
    content.className = "link-content";

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = product.description;

    content.appendChild(h3);
    content.appendChild(p);

    a.appendChild(icon);
    a.appendChild(content);

    container.appendChild(a);
  });
}

function renderPagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(products.length / productsPerPage);
  const maxButtons = 5; // maksimal tombol halaman
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  // Tombol Prev
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentPage);
      renderPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  paginationContainer.appendChild(prevBtn);

  // Tombol halaman
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts(currentPage);
      renderPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationContainer.appendChild(btn);
  }

  // Tombol Next
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts(currentPage);
      renderPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  paginationContainer.appendChild(nextBtn);
}

fetch("asset/JSON/products.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load products.json");
    return res.json();
  })
  .then((data) => {
    products = data;
    renderProducts(currentPage);
    renderPagination();
  })
  .catch((err) => console.error("Error loading products:", err));

//themeToggleBtn

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");

// Cek tema awal (dari localStorage atau system)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
} else {
  // kalau gak ada simpanan, cek system prefer dark
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
});
