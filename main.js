// scrool
$('.links a').on('click',function(e) {
  if(this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
$('.Up').on('click',function(e) {
  if(this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000
    );
  }
});
$('.getTouched').on('click',function(e) {
  if(this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});


$(function() {
    'use strict';
    var background = $('.home');
    background.height($(window).height());

    /*var background = $('.about');
    background.height($(window).height());*/

    var background = $('.projects');
    background.height($(window).height());

    var background = $('.resume');
    background.height($(window).height());

    var background = $('.contact');
    background.height($(window).height());

    $(window).resize(function() {
        background.height($(window).height())
    });
});
// projects
function showResWeb() {
  document.getElementById('responsive-websites').style.display = 'block';
  document.getElementById('js-apps').style.display = 'none';
}
function showJsApp() {
  document.getElementById('responsive-websites').style.display = 'none';
  document.getElementById('js-apps').style.display = 'block';
}
// Resume counter
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
//const num = document.querySelector('.num');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(()=> {
  if(counter1 == 90) {
    clearInterval();
  }
  else {
    counter1+=1;
    num1.textContent = counter1 + "%";
  }
},90);
setInterval(()=> {

  if(counter2 == 60) {
    clearInterval();
  }
  else {
    counter2+=1;
    num2.textContent = counter2 + "%";
  }
},130);
setInterval(()=> {
  if(counter3 == 80) {
    clearInterval();
  }
  else {
    counter3+=1;
    num3.textContent = counter3 + "%";
  }
},100);
/*var counter = 0;
setInterval(run,50);
function run() {
    counter += 1;
    if(counter == 101) {
        clearInterval(run);
    }
    else {
        var num = document.querySelector('.counter');
        num.textContent = counter + '%';
    }
}
setTimeout(stop,5000)
function stop() {
    var stop = document.querySelector('.stop');
    stop.style.display = 'block';
}
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".react .bar").circleProgress({
    value: 0.60
  });*/
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/* magic!!
const skewedOne = document.querySelector('.skewedOne');
const skewedTwo = document.querySelector('.skewedTwo');
window.addEventListener('scroll',function() {
  const val1 = -20 + window.scrollY/45;
  const val2 = 20 + window.scrollY/-45;

  skewedOne.style.transform = "skewY(" + val1 + "deg)";
  skewedTwo.style.transform = "skewY(" + val2 + "deg)";
})*/


//Scroll bar
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  dh = $(document).height();
  wh = $(window).height();

  scrollPercent = (scroll / (dh-wh))* 100;
  $('#progressbar').css('height',scrollPercent + '%');
});

// Scroll line
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  dh = $(document).height();
  wh = $(window).height();

  scrollPercent = (scroll / (dh-wh))* 80;
  $('.linethr').css('height',scrollPercent + '%');
});

