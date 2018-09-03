
$( document ).ready(function() {
  (function(){
    var word = "Cześć, mam na imię Kinga  i jestem Front end Developerem.";
    word = word.split("");
    var wordLength = word.length;
    var i = 0;
    var id;
    var text = "";

    function updateText() {
      if ( i < wordLength ) {
        text += word[i];
      $('#target').text(text);
      i++;
        setTimeout(updateText, 100);
      }
    }
    setTimeout(updateText(i), 300);
  })();


//scroll
$(window).on('scroll', function(){

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     $('header').addClass('headerScroll');
 } else {
    $('header').removeClass('headerScroll');
 }

});

//canvas

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#f7f7f7';
ctx.fillStyle = '#f7f7f7';

for (let i=0; i<15; i++) {
  ctx.beginPath();
ctx.moveTo(0+i*20, 0); //rysowanie zaczynamy od punktów 35,10 - tam więc przesuwamy nasze piórko
ctx.lineTo(20+i*20 ,0);
ctx.lineTo(10+i*20 ,80);
ctx.lineTo(0+i*20, 0);
ctx.fill();
}

//scrollSkills



//scroll section

  $('#nav').onePageNav({
  	currentClass: 'current',
  	changeHash: false,
  	scrollSpeed: 750,
  	scrollThreshold: 0.5,
  	filter: '',
  	easing: 'swing'
  });

  $('.menuHamburger').on('click', function(){
    $('.navSmallScreen').slideToggle("slow" );
  })


});
