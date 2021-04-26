$('#menu').on("click", function () {
  $('.hamburger').slideToggle(300, function(){
    if ($(this).css('display') === 'none') {
      $('.hamburger').removeAttr('style')
    }
  })
})
// $('.hamburger').css('height', document.body.scrollHeight);
console.log(window.innerHeight)