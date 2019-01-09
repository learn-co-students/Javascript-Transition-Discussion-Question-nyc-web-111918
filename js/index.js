// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveLincoln = document.querySelector('#save_lincoln')
const interval = document.querySelector('#interval')

function fadeOutEffect() {
  console.log(interval.value)
  const foreground = document.querySelector('#foreground')

  let fadeEffect = setInterval(function () {
      if (!foreground.style.opacity) {
          foreground.style.opacity = 1;
      }
      if (foreground.style.opacity > 0) {
          foreground.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, interval.value);
}

saveLincoln.addEventListener('click', () => fadeOutEffect())






  // if the button is clicked
  // there should be something that happens
  // that takes the input from the interval field and uses it
