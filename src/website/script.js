// waiting for until user hits calculate
document.getElementById("lvlCalc").addEventListener("submit", calculateRes);

// debugging, dont actually use
function calculateRes(e) {
  var weap = document.getElementById("weapSelect");
  var weapName = weap.options[weap.selectedIndex].text;
  const currLevel = document.getElementById("currLevel").value;
  const tarLevel = document.getElementById("tarLevel").value;

  // calculations (Material requirements) section
  const x = parseFloat(currLevel);
  const y = parseFloat(tarLevel);
  // display results
  document.getElementById("weapName").innerHTML = weapName;
  document.getElementById("x").innerHTML = x;
  document.getElementById("y").innerHTML = y;
  // prevents the user from submitting some empty form
  e.preventDefault();
}
