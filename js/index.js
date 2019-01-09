// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
//   console.log('test 1')
// }

document.addEventListener("DOMContentLoaded", function(){
  const button = document.querySelector("#save_lincoln")
  button.addEventListener("click",function(e){
    const inputInterval = parseInt(document.querySelector("#interval").value)
    fadeOutEffect(inputInterval)

  })

  function fadeOutEffect(inputInterval) {
    const fadeTarget = document.getElementById("foreground");
    const fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
        console.log('test 1')
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= .25 ;
        console.log('test 2 ')
      }

    }, inputInterval);
  }
})
