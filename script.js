const menuToggle = document.querySelector(".open");
const navigation = document.querySelector(".navigation");
const closenav = document.querySelector(".navigation svg");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("h-nav-resp");
  menuToggle.classList.toggle("opened-nav");
  document.querySelector("#main-section").style.filter = "blur(5px)";
  navbar.style.opacity = "0";
});

closenav.addEventListener("click", () => {
  navigation.classList.toggle("h-nav-resp");
  menuToggle.classList.toggle("opened-nav");
  document.querySelector("#main-section").style.filter = "blur(0)";
  navbar.style.opacity = "1";
});

const listItems = [];
for (year of document.querySelectorAll('div[id*="tab-"]')) {
  const list = document.createElement("li");
  list.classList.add("list");

  const link = document.createElement("a");
  link.href = "#" + year.id;

  const span = document.createElement("span");
  span.classList.add("title");
  span.innerText = year.id.replace("tab-", "");

  link.appendChild(span);
  list.appendChild(link);

  listItems.push(list);
}

const ul = document.querySelector(".navigation ul");

for (listItem of listItems) {
  ul.appendChild(listItem);
}

// add theme class to the document
const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
};

const themeIcons = (t1, t2) => {
  t1.style.display = "block";
  t2.style.display = "none";
};

const toggleTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
    themeIcons(darkIcon, lightIcon);
  } else {
    setTheme("dark");
    themeIcons(lightIcon, darkIcon);
  }
};

// on page load set the theme
if (localStorage.getItem("theme") === null) {
  setTheme("dark");
  themeIcons(lightIcon, darkIcon);
} else if (localStorage.getItem("theme") === "dark") {
  setTheme("dark");
  themeIcons(lightIcon, darkIcon);
} else {
  setTheme("light");
  themeIcons(darkIcon, lightIcon);
}

document
  .querySelector(".toggle-theme")
  .addEventListener("click", () => toggleTheme());

// SCROLL UP
let scrollUpBtn = document.getElementById("scroll-up-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

function scrollToHome() {
  document.documentElement.scrollTop = 0;
}
