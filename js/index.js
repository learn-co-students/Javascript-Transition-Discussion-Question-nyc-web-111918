// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('save_lincoln').addEventListener("click", function(event){
    saveLincoln(document.getElementById('interval').value);
  })
})

let overlayOpacity = 1;
let stopFunction = false;

function saveLincoln(interval){
  document.getElementById('foreground').style.opacity = overlayOpacity;
  if(isNaN(interval)) {
    interval = 10000
  };
  let myInterval = window.setInterval(decreaseOpacity, (interval/100));
};

function decreaseOpacity(){
  if (stopFunction === false){
    if (overlayOpacity > .01){
      overlayOpacity = overlayOpacity - .01;
      document.getElementById('foreground').style.opacity = overlayOpacity;
    } else {
      stopFunction = true;
      alert("...Thank you for saving me, young time traveller...");
    };
  };
};
