
$(function() {
  $('.exp').hide();
  $('.red').hide();
  $('input[name="test"]').on('click', function() {
    var el = $(this);
    if (el.val() == 'ans') {
      el.parents('.q').nextAll('.exp').first().show();
      el.parents('.q').nextAll('.red').first().hide();
      $('.red').hide();
    } else {
      el.parents('.q').nextAll('.red').first().show();
      el.parents('.q').nextAll('.exp').first().hide();
    }
  })
});

// <script type="text/javascript">
//     var timeleft = 30;
//     var gameTimer = setInterval(function(){
//     timeleft--;
//     document.getElementById("countdowntimer").textContent = timeleft;
//     if(timeleft <= 0)
//         clearInterval(gameTimer);
//     },1000);
// </script>;


