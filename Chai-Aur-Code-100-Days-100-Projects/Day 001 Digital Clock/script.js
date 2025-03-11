function updateTime() {
  const timeElement = document.querySelector("#time");
  const dateElement = document.querySelector("#date");

  const timeNow = new Date();

  const hours = timeNow.getHours() % 12 || 12;
  const minutes = timeNow.getMinutes().toString().padStart(2, "0");
  const seconds = timeNow.getSeconds().toString().padStart(2, "0");
  const ampm = hours > 12 ? "AM" : "PM";

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = timeNow.toLocaleDateString(undefined, dateOptions);

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

setInterval(updateTime, 1000);

updateTime();
