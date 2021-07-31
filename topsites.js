const sitesContainer = document.querySelector(".topsites");

// Getting sites from localstorage
const sites = localStorage;
const siteNames = Object.keys(sites);

// Looping through each site and adding it to sites container
for (let i = 0; i < sites.length; i++) {
  const siteElem = document.createElement("a");
  siteElem.setAttribute("class", "site");

  const siteName = siteNames[i];
  const siteUrl = sites[siteName];

  siteElem.setAttribute("href", siteUrl);
  siteElem.innerHTML = siteName;

  sitesContainer.insertAdjacentElement("afterbegin", siteElem);
}

// Setting sites
const popup = document.querySelector(".add-site-popup");
const overlay = document.querySelector(".overlay");
let siteName = document.querySelector(".site-name");
let siteUrl = document.querySelector(".site-url");

const clearSiteInput = () => {
  siteName.value = "";
  siteUrl.value = "";
};

const addSite = () => {
  // Check if site name and url are empty space
  // /\s/.test(siteName.value) && /\s/.test(siteUrl.value)
  if (true) {
    // Check if site URL is valid
    if (
      (siteUrl.value.includes("http://") ||
        siteUrl.value.includes("https://")) &&
      siteUrl.value.includes(".")
    ) {
    } else {
      siteUrl.value = "https://" + siteUrl.value;
    }

    // Set the site to localstorage
    localStorage.setItem(siteName.value, siteUrl.value);

    // Making the input fields empty after submitting
    clearSiteInput();

    // Reloading the page to show the added sites and hide the popup
    location.reload();
  } else {
    siteName.style.outline = "1px solid red";
    siteUrl.style.outline = "1px solid red";
  }
};

const showAddSitePopup = () => {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  siteName.focus();
};

const removeAddSitePopup = () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  clearSiteInput();
};
