
let velocity = parseInt(prompt("Enter speed:"));

if (velocity > 135) {
  alert("License suspended");
} else {
  if (velocity <= 70) {
    alert("Ok");
  } else if (velocity > 70 && velocity < 75) {
    alert("Demerit points: 0");
  } else if (velocity >= 75 && velocity < 80) {
    alert("Demerit points: 1");
  } else if (velocity >= 80 && velocity < 85) {
    alert("Demerit points: 2");
  } else if (velocity >= 85 && velocity < 90) {
    alert("Demerit points: 3");
  } else if (velocity >= 90 && velocity < 95) {
    alert("Demerit points: 4");
  } else if (velocity >= 95 && velocity < 100) {
    alert("Demerit points: 5");
  } else if (velocity >= 100 && velocity < 105) {
    alert("Demerit points: 6");
  } else if (velocity >= 105 && velocity < 110) {
    alert("Demerit points: 7");
  } else if (velocity >= 110 && velocity < 115) {
    alert("Demerit points: 8");
  } else if (velocity >= 115 && velocity < 120) {
    alert("Demerit points: 9");
  } else if (velocity >= 120 && velocity < 125) {
    alert("Demerit points: 10");
  } else if (velocity >= 125 && velocity < 130) {
    alert("Demerit points: 11");
  } else if (velocity >= 130 && velocity < 135) {
    alert("Demerit points: 12");
  }
}
