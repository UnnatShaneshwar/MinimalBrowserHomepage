const searchInput = document.querySelector("#search");
const search = () => {
  const searchQuery = searchInput.value;
  location.href = `https://google.com/search?q=${searchQuery}`;
};

searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    search();
  }
});
