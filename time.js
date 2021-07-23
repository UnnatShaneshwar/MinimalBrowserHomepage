// Get time container
const timeContainer = document.querySelector(".time");

const updateTime = () => {
  // Create date object
  const time = new Date();

  // Get hours and minutes
  const hours = time.getHours() % 12 || 12,
    mins = time.getMinutes();

  // Display time
  timeContainer.innerHTML = `${hours}:${mins < 10 ? "0" : ""}${mins}`;
};

// Initial Time
updateTime();

// Time
setInterval(() => {
  // Update Time
  updateTime();
}, 3000);
