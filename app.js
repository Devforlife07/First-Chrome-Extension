let date = new Date();
var n = date.toDateString();
document.querySelector(".container2").innerHTML = `<h3> ${n}</h3>`;
function startTime() {
  var h = date.getHours();
  if (h > 12) {
    h -= 12;
  }
  var m = date.getMinutes();
  var s = date.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".container1").innerHTML =
    "<h1>" + h + ":" + m + ":" + s + "</h1>";
}
var t = setTimeout(startTime, 500);
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
