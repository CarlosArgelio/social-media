
function formatDate() {
  const date = new Date();
  const formattedDate = `${date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  })}`;
  return formattedDate
}

module.exports = {
  formatDate
}
