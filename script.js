const hours = document.getElementById("hours-Counter");
const minutes = document.getElementById("minutes-Counter");
const seconds = document.getElementById("seconds-Counter");

let PastHours, PastMinutes, PastSeconds;

function updateTime() {
  setTimeout(() => {
    const date = new Date();
    let newHours = date.getHours();
    let newMinutes = date.getMinutes();
    let newSeconds = date.getSeconds();

    if (PastHours !== newHours) {
      PastHours = newHours;
      animateChange(newHours, hours);
    }
    if (PastMinutes !== newMinutes) {
      PastMinutes = newMinutes;
      animateChange(newMinutes, minutes);
    }
    if (PastSeconds !== newSeconds) {
      PastSeconds = newSeconds;
      animateChange(newSeconds, seconds);
    }
    updateTime();
  }, 1000);
}
function animateChange(newValue, AnimatedElement) {
  AnimatedElement.classList.add("MoveUp");
  setTimeout(() => {
    AnimatedElement.textContent = newValue;
    AnimatedElement.classList.remove("MoveUp");
    AnimatedElement.classList.add("MoveDown");
    setTimeout(() => {
      AnimatedElement.classList.remove("MoveDown");
    }, 500);
  }, 500);
}
updateTime();
