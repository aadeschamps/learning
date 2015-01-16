

$(document).ready(function() {

     $('#conc').hover(
         function () {
           $('#conc_list').css({"display":"block"});
         }, 
         function () {
           $('#conc_list').css({"display":"none"});
         }
     );
     $('#git').hover(
         function () {
           $('#git_list').css({"display":"block"});
         }, 
         function () {
           $('#git_list').css({"display":"none"});
         }
     );
     $('#chat_s').hover(
         function () {
           $('#chat_s_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_s_list').css({"display":"none"});
         }
     );
     $('#chat_c').hover(
         function () {
           $('#chat_c_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_c_list').css({"display":"none"});
         }
     );
     $('#test').hover(
         function () {
           $('#test_list').css({"display":"block"});
         }, 
         function () {
           $('#test_list').css({"display":"none"});
         }
     );
     $('#host').hover(
         function () {
           $('#host_list').css({"display":"block"});
         }, 
         function () {
           $('#host_list').css({"display":"none"});
         }
     );

     $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
     });

     $(window).scroll(function(){
      // console.log($(window).scrollTop());
      // console.log($("#c_intro").offset().top);
      // console.log($("#c_concepts").offset().top);
      if( $(window).scrollTop() >= 0 && 
        $(window).scrollTop() < $("#c_concepts").offset().top -10 ){
        console.log("in");
        $("#intro > a").css({"color":"red"});
      }else{
        $("#intro > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_concepts").offset().top -10 && 
        $(window).scrollTop() < $("#c_server").offset().top -10 ){
        console.log("in");
        $("#conc > a").css({"color":"red"});
      }else{
        $("#conc > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_server").offset().top -10 && 
        $(window).scrollTop() < $("#c_client").offset().top - 10){
        console.log("in");
        $("#chat_s > a").css({"color":"red"});
      }else{
        $("#chat_s > a").css({"color":"white"});
      }
     });


});

if( $(window).scrollTop() >= 0 && 
  $(window).scrollTop() < $("#c_concepts").offset().top -10 ){
  console.log("in");
  $("#intro > a").css({"color":"red"});
}else{
  $("#intro > a").css({"color":"white"});
}
if( $(window).scrollTop() >= $("#c_concepts").offset().top -10 && 
  $(window).scrollTop() < $("#c_server").offset().top -10 ){
  console.log("in");
  $("#conc > a").css({"color":"red"});
}else{
  $("#conc > a").css({"color":"white"});
}
if( $(window).scrollTop() >= $("#c_server").offset().top -10 && 
  $(window).scrollTop() < $("#c_client").offset().top - 10){
  console.log("in");
  $("#chat_s > a").css({"color":"red"});
}else{
  $("#chat_s > a").css({"color":"white"});
}

var clicked = false;
if( $(window).width() < 1250){
    $('#navbar').css({left: "-200px"});
    $('#content').css({left:"0px"});
    $('#clicker').css({display:"block"});
  }else{
    // if(!clicked)
    $('#navbar').css({left:"0px"});
    $('#content').css({left:"200px"});
    $('#clicker').css({display:"none"});
  }

$(window).resize(function(){
  // console.log($(window).width());
  // console.log($('#navbar'))
  if( $(window).width() <= 1250){
    if(!clicked){
      $('#navbar').css({left: "-200px"});
      $('#content').css({left:"0px"});
      $('#clicker').css({display:"block"});
      $('#clicker').css({left:"0px"});
      // clicked = false;
    }
  }else{
    $('#navbar').css({left:"0px"});
    $('#content').css({left:"200px"});
    $('#clicker').css({display:"none"});
    clicked = false;
  }
});



$('#clicker').click(function(){
  // console.log(clicked);
  if(!clicked){
    $('#navbar').animate({left:"0px"});
    $('#clicker').animate({left:"200px"});
    // $('#content').animate({left:"0px"});
    clicked = true;
  }else{
    console.log("hey");
    $('#navbar').animate({left: "-200px"});
    $('#clicker').animate({left:"0px"});
    // $('#content').animate({left:"175px"});
    clicked = false;
  }
  console.log(clicked);
});