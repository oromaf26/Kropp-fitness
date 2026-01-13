const header = document.querySelector(".header");
const sections = document.querySelectorAll(".block");

/**
 * Получаем реальный background-color элемента
 * если transparent — берём дефолт
 */
function getBgColor(el) {
  const bg = getComputedStyle(el).backgroundColor;

  if (bg && bg !== "rgba(0, 0, 0, 0)") {
    return bg;
  }

  return "var(--color-dark)";
}

function updateHeaderBg() {
  const headerHeight = header.offsetHeight;
  let currentSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= headerHeight && rect.bottom > headerHeight) {
      currentSection = section;
    }
  });

  if (currentSection) {
    header.style.backgroundColor = getBgColor(currentSection);
  }
}

window.addEventListener("scroll", updateHeaderBg);
window.addEventListener("load", updateHeaderBg);