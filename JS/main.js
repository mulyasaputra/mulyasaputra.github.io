// Safe selector queries and global values initialization
const yearEl = document.querySelector(".year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const nameEl = document.querySelector(".my-full-name");
if (nameEl) nameEl.textContent = 'Mulya Hd Saputra';

const profileImgEl = document.querySelector('div.profile img, img.profile-img');
if (profileImgEl) profileImgEl.src = 'asset/images/file_00000000103461f9a9338e803dc43ad6.jpg';

// Dynamically populate link URLs from socials.json using data-social attributes
fetch("asset/JSON/socials.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load socials.json");
    return res.json();
  })
  .then((data) => {
    document.querySelectorAll("[data-social]").forEach((el) => {
      const appName = el.getAttribute("data-social");
      const match = data.find((social) => social.app.toLowerCase() === appName.toLowerCase());
      if (match) {
        const a = document.createElement("a");
        a.href = match.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        // Assign styling classes based on context container
        if (el.closest("#footer-socials")) {
          a.className = "text-gray-400 hover:text-white transition duration-300";
        } else if (el.closest("#footer-socials-links")) {
          a.className = "social-icon";
        } else {
          a.className = el.className || "text-gray-400 hover:text-white transition duration-300";
        }

        // Create inner FontAwesome icon element
        const icon = document.createElement("i");
        let iconClass = match.iconClass;
        if (el.closest("#footer-socials")) {
          iconClass += " text-xl";
        }
        icon.className = iconClass;

        a.appendChild(icon);
        el.replaceWith(a);
      }
    });
  })
  .catch((err) => console.error("Error updating social links from socials.json:", err));


