setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("");
  y();
}

x(function () {
  console.log("y");
});
