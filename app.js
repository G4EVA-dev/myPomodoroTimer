let w_minutes = document.getElementById("workMinutes");
let w_seconds = document.getElementById("workSeconds");
let startWorkBtn = document.getElementById("startWork");

let b_minutes = document.getElementById("breakMinutes");
let b_seconds = document.getElementById("breakSeconds");

const workFunction = () => {
  let WMinutes = 24;
  let WSeconds = 60;

  const interval = setInterval(function () {
    WSeconds--;
    w_seconds.textContent = WSeconds;

    if (WSeconds === 0) {
      WMinutes--;
      w_minutes.innerHTML = WMinutes;
      WSeconds = 59;
      if (WMinutes === 0) {
        clearInterval(interval);
      }
    }
  }, 1000);
};


const breakFunction = () => {
  let bMinutes = 5;
  let bSeconds = 60;

  const interval = setInterval(function () {
    bSeconds--;
    b_seconds.textContent = bSeconds;

    if (bSeconds === 0) {
      bMinutes--;
      b_minutes.innerHTML = bMinutes;
      bSeconds = 59;
      if (bMinutes === 0) {
        clearInterval(interval);
      }
    }
  }, 1000);
};

const reset = () =>{

}
// startWorkBtn.addEventListener('click', workFunction())


