lazyload();

$("#home").click(function(){
  responsiveVoice.cancel();
  location.reload();
})
$('.main img:gt(0)').hide();
setInterval(function() {
    $('.main :first-child').toggle()
      .next('img').fadeIn()
      .end().appendTo('.main');
  },
  4000);

$("#start").click(function() {
  $(".start").toggle();
  $(".choice").fadeIn("slow");
  // var msg = new SpeechSynthesisUtterance();
  // msg.text = "Select an animal class";
  // var voices = speechSynthesis.getVoices();
  // msg.voice = voices[2];
  // speechSynthesis.speak(msg);
  responsiveVoice.setDefaultVoice("US English Female");
  responsiveVoice.speak("Select an animal class from the options to play the game","US English Female", {
    rate: 0.9,volume:0.6
  });
});

$(".choice a").click(function(){
  if(this.innerHTML=="mammals"){
  responsiveVoice.speak("Please	select this animal name of the mammals class","US English Female", {
    rate: 1.05,volume:0.6
  });}
  else if(this.innerHTML=="birds"){
    responsiveVoice.speak("Please	select this animal name of the birds class","US English Female", {
      rate: 1.05,volume:0.6
    });
  }
  else if(this.innerHTML=="fishes"){
    responsiveVoice.speak("Please	select this animal name of the fishes class","US English Female", {
      rate: 1.05,volume:0.6
    });
  }
  else if(this.innerHTML=="reptiles"){
    responsiveVoice.speak("Please	select this animal name of the reptiles class","US English Female", {
      rate: 1.05,volume:0.6
    });
  }
  else if(this.innerHTML=="amphibian"){
    responsiveVoice.speak("Please	select this animal name of the amphibian class","US English Female", {
      rate: 1.05,volume:0.6
    });
  }
  else if(this.innerHTML=="invertebrates"){
    responsiveVoice.speak("Please	select this animal name of the invertebrates class","US English Female", {
      rate: 1.05,volume:0.6
    });
  }
})
