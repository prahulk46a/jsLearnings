// Main Container
const main = document.createElement("main");
main.style.fontFamily = "Arial, sans-serif";
main.style.color = "#000";
main.style.minHeight = "100vh";

// Gradient Background
const gradientSection = document.createElement("div");
gradientSection.style.background = "linear-gradient(180deg, #000, transparent 50%), linear-gradient(90deg, #17d1c6, #336aea 19.84%, #8d639e 39.68%, #eb644c 59.52%, #ea7e11 79.36%, #44b678 99.2%), linear-gradient(0deg, transparent, #000 40%)";
gradientSection.style.color = "#fff";

// Header Section
const navbar = document.createElement("nav");
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.padding = "20px 50px";

const logo = document.createElement("div");
logo.textContent = "FREEPIK";
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
navbar.appendChild(logo);

const navLinks = document.createElement("div");
navLinks.style.display = "flex";
navLinks.style.gap = "20px";

const links = ["Tools", "Images", "Icons", "Videos", "Templates"];
links.forEach(link => {
  const anchor = document.createElement("a");
  anchor.textContent = link;
  anchor.href = "#";
  anchor.style.textDecoration = "none";
  anchor.style.color = "#fff";
  anchor.style.fontWeight = "500";
  navLinks.appendChild(anchor);
});
navbar.appendChild(navLinks);
gradientSection.appendChild(navbar);

// Hero Section
const hero = document.createElement("div");
hero.style.textAlign = "center";
hero.style.padding = "50px 20px";

const heroTitle = document.createElement("h1");
heroTitle.textContent = "Smarter creativity, faster designs";
heroTitle.style.fontSize = "2.5rem";
heroTitle.style.marginBottom = "20px";
hero.appendChild(heroTitle);

const heroSubtitle = document.createElement("p");
heroSubtitle.textContent = "Everything you need, from stock images and videos to AI-powered design tools";
heroSubtitle.style.fontSize = "1.2rem";
heroSubtitle.style.marginBottom = "30px";
hero.appendChild(heroSubtitle);

const searchBar = document.createElement("div");
searchBar.style.display = "flex";
searchBar.style.justifyContent = "center";
searchBar.style.gap = "10px";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search all assets";
searchInput.style.width = "300px";
searchInput.style.padding = "10px";
searchInput.style.borderRadius = "5px";
searchInput.style.border = "1px solid #ddd";
searchBar.appendChild(searchInput);

const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.style.padding = "10px 20px";
searchButton.style.backgroundColor = "#ffcc00";
searchButton.style.border = "none";
searchButton.style.borderRadius = "5px";
searchButton.style.cursor = "pointer";
searchBar.appendChild(searchButton);

hero.appendChild(searchBar);
gradientSection.appendChild(hero);
main.appendChild(gradientSection);

// Features Section: White Background
const featuresSection = document.createElement("div");
featuresSection.style.backgroundColor = "#fff";
featuresSection.style.padding = "40px";

const features = document.createElement("section");
features.style.display = "grid";
features.style.gridTemplateColumns = "repeat(auto-fit, minmax(350px, 1fr))";
features.style.gap = "20px";

// Feature array 
const featureData = [
  { title: "AI Video Generator", desc: "Create stunning videos from text or images.", img: "https://fps.cdnpk.net/home/banner-tools-v2/ai-video-generator-v2.webp" },
  { title: "AI Image Generator", desc: "From words to images.", img: "https://fps.cdnpk.net/home/banner-tools-v2/ai-image-generator.webp" },
  { title: "Reimagine", desc: "Variations with AI.", img: "https://fps.cdnpk.net/home/banner-tools-v2/reimagine.webp" },
  { title: "Upscale", desc: "Increase resolution and details.", img: "https://fps.cdnpk.net/home/banner-tools-v2/upscale.webp" }
];

featureData.forEach(feature => {
  const card = document.createElement("div");
  card.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
  card.style.padding = "20px";
  card.style.borderRadius = "10px";
  card.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = feature.img;
  img.alt = feature.title;
  img.style.width = "100%";
  img.style.height = "150px";
  img.style.borderRadius = "10px";
  img.style.marginBottom = "15px";
  img.style.objectFit = "cover";
  card.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = feature.title;
  title.style.fontSize = "1.2rem";
  title.style.marginBottom = "10px";
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = feature.desc;
  desc.style.fontSize = "0.9rem";
  desc.style.color = "#333";
  card.appendChild(desc);

  features.appendChild(card);
});


featuresSection.appendChild(features);
main.appendChild(featuresSection);

// Append Main to Body
document.body.appendChild(main);
