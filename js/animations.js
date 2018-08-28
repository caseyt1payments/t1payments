$( document ).ready(function(){
  // resize row js
  // function make div height equals
  equalheight = function(container){

      var currentTallest = 0,
          currentRowStart = 0,
          rowDivs = new Array(),
          $el,
          topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto')
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }

         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }

      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }

     });
  }

  $(window).load(function() {
    equalheight('.row .thumb-post-title');
  });

  $(window).resize(function(){
    equalheight('.row .thumb-post-title');
  });

  // $(document).ready(function(){
  //   var nav = $(".subnav-wrap");
  //   $(window).scroll(function() {
  //     var nav = $(".subnav-wrap");
  //     if($(window).scrollTop()>478) {
  //       $(".subnav-wrap").css("opacity", 0);
  //     }
  //   })
  // });

  // Subnav Fix
  var $fixednav = $(".fixed-subnav-wrap");
  var $nav = $(".subnav-wrap");
  var $hidnav = $(".hidden-nav");

// if($hidnav && window.location.pathname != "/"){
//   var navWaypoint = new Waypoint({
//       element: document.getElementsByClassName('hidden-nav'),
//       handler: function(direction) {
//         if(direction == "down" && $nav.css("opacity") == 1){
//           $nav.velocity("fadeOut", {
//             delay:100,
//             duration:500
//           })
//         }
//         if(direction == "up" && $nav.css("opacity") == 0){
//           $nav.velocity("fadeIn", {
//             delay:100,
//             duration:500
//           })
//         }
//       }
//   });
// }

  // $(window).on('scroll', function() {
  //     $('.anim-cont').each(function() {
  //         if (!$(this).hasClass('animated')) {
  //             if ($(this).isOnScreen(0.45, 0.45)) {
  //                 TweenMax.staggerFromTo($(this).find('.anim-item'), 0.4, {
  //                     y: 200,
  //                     opacity: 0
  //                 }, {
  //                     y: 0,
  //                     opacity: 1,
  //                     ease: Power2.easeOut
  //                 }, 0.15);
  //                 $(this).addClass('animated');
  //             }
  //         }
  //     });
  // });

//Final working animations
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
		triggerElement: ".anim-cont"
	})
	.setTween(".anim-item", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
	.addTo(controller);

  var ind_scene = new ScrollMagic.Scene({
    triggerElement: ".ind-anim-cont"
  })
  .setTween(".ind-anim-item", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
  .addTo(controller);

});
