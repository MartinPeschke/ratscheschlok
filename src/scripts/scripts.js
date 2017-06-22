$(function(){
  $('body').scrollspy({ target: '#major-navbar' })

  $("#major-navbar.smooth-scrollable").on('click', 'a', function(event){
    event.preventDefault();
    $('#major-navbar').collapse('hide')

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
});