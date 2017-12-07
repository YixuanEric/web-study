$(window).on('load', function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})

$("#win").hide();

var cur_pic;
var cur_class;
var wins = 0;
var a1 = new Audio('true.mp3');
var a2 = new Audio('false.wav');
var mammals = ["chimp.jpg","tiger.jpg", "panda.jpg"];
var fishes = ["sardine.jpg", "lionfish.jpg", "grouper.jpg"];
var birds = ["hawk.jpg", "parrot.jpg", "penguin.jpg"];
var reptiles = ["crocodile.jpg", "lizard.jpg", "snake.jpg"];
var amphibian = ["frog.jpg", "newt.jpg","salamander.jpg"];
var invertebrates = ["snail.jpg", "scallop.jpg", "octupus.jpg"];


$(".main img:gt(0)").hide();
var auto = setInterval(function() {
    $('.main :first-child').toggle()
      .next('img').fadeIn()
      .end().appendTo('.main');
  },
  4000);

function shuffle(a){
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

function getname(x) {
  var arr = x.split(".");
  return arr[0];
}




function getpic(array) {
  console.log("cur_pic is "+cur_pic);
  clearInterval(auto);
  $("#win").hide();
  var arr = array.slice(0);
  console.log(arr);
  while(true){
    console.log("in loop");
    var item = arr[Math.floor(Math.random() * arr.length)];
    console.log("random pic is "+item);
    if(cur_pic!=item){
      break;
    }
  }
  cur_pic = item;
  console.log("The current picture is "+ cur_pic);
  var img = $('<img>').attr({
    'src': "image/" + item,
    'alt': item
  })
  var index = arr.indexOf(item);
  arr.splice(index, 1);
  var item2 = arr[Math.floor(Math.random() * arr.length)];
  var index = arr.indexOf(item2);
  arr.splice(index, 1);
  var item3 = arr[Math.floor(Math.random() * arr.length)];

  if ($("#names").children().length == 0){
    var a = $('<li>').append($('<a>').text(getname(item)).attr('href', "#").click(guesshandler));
    var b = $('<li>').append($('<a>').text(getname(item2)).attr('href', "#").click(guesshandler));
    var c = $('<li>').append($('<a>').text(getname(item3)).attr('href', "#").click(guesshandler));

  var names = [a, b, c]; shuffle(names);
  for(var i = 0;i<3;i++){
    $("#names").append(names[i]);
  }
}

   $('.main').empty().append(img); $('.choice').hide(); $('.guess').show();
}


function guesshandler(event){
  var answer = getname(cur_pic);
  if(event.target.innerHTML==answer){
    console.log("correct");
    a1.play();
    wins +=1;
    console.log("wins "+wins);
    if(wins>=5){
      $(".guess").hide();
      $(".choice").show();
      $("#win").show();
      $("#names").empty();
      wins = 0;
      a1.play();

    }
    else{
      getpic(cur_class);
    }
  }
  else{
    console.log("false");
    a2.play();
  }
}



$("#home").click(function() {
  responsiveVoice.cancel();
  location.reload();
})




$("#start").click(function() {
  $(".start").toggle();
  $(".choice").fadeIn("slow");
  // var msg = new SpeechSynthesisUtterance();
  // msg.text = "Select an animal class";
  // var voices = speechSynthesis.getVoices();
  // msg.voice = voices[2];
  // speechSynthesis.speak(msg);
  responsiveVoice.setDefaultVoice("US English Female");
  responsiveVoice.speak("Select an animal class from the options to play the game", "US English Female", {
    rate: 0.9,
    volume: 0.6
  });
});

$(".choice a").click(function() {
  if (this.innerHTML == "mammals") {
    responsiveVoice.speak("Please	select this animal name of the mammals class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = mammals;
    getpic(mammals);

  } else if (this.innerHTML == "birds") {
    responsiveVoice.speak("Please	select this animal name of the birds class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = birds;
    getpic(birds);

  } else if (this.innerHTML == "fishes") {
    responsiveVoice.speak("Please	select this animal name of the fishes class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = fishes;
    getpic(fishes);

  } else if (this.innerHTML == "reptiles") {
    responsiveVoice.speak("Please	select this animal name of the reptiles class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = reptiles;
    getpic(reptiles);

  } else if (this.innerHTML == "amphibian") {
    responsiveVoice.speak("Please	select this animal name of the amphibian class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = amphibian;
    getpic(amphibian);

  } else if (this.innerHTML == "invertebrates") {
    responsiveVoice.speak("Please	select this animal name of the invertebrates class", "US English Female", {
      rate: 1.05,
      volume: 0.6
    });
    cur_class = invertebrates;
    getpic(invertebrates);

  }
})
