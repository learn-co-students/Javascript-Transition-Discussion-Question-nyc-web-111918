// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
//
// document.allEventListener("submit")

const foregroundImg = document.querySelector('#foreground')
document.addEventListener("DOMContentLoaded", function(e){

 const form = document.querySelector('#interval')
const inputTag = document.querySelector('#save_lincoln')

 inputTag.addEventListener('click', function(event){
   saveLincoln(form.value)


 })
})

function saveLincoln(interval) {
  interval = parseInt(interval)
  if(isNaN(interval)) {
    interval = 10000
  };

    foregroundImg.style.opacity = 1
    setInterval(function(){
      if(foregroundImg.style.opacity > 0){
        foregroundImg.style.opacity -= 0.1

      }
    }, interval)
};

setInterval(function () {

}, 10);
