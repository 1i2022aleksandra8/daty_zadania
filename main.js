const date = new Date

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("en-US"));
console.log(date.toLocaleString("ko-KR"));
console.log(date.toLocaleString("ar-EG"));
console.log(date.toLocaleString("en-GB"));


document.write("en-US: " + date.toLocaleDateString("en-US") + "<br>");
document.write("en-US: " + date.toLocaleDateString("ko-KR") + "<br>");
document.write("en-US: " + date.toLocaleDateString("ar-EG") + "<br>");
document.write("en-US: " + date.toLocaleDateString("en-GB") + "<br>");