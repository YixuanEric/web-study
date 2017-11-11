var dict = ["alabama", "alaska", "arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan","minnesota"
,"mississippi","missouri","montana","nebraska","nevada","new hampshire","new jersey","new mexico","new york","north carolina","north dakato","ohio","oklahoma","oregon","pennsylvania","rhode island","south carolina","southdakota","tennessee","texas",
"utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"];

function create_newword(){
  var a = dict[Math.floor(Math.random() * dict.length)];
  console.log("This the random word :" + a);
  return a;
}

var word = create_newword();
var gameover = false;
hangman = new Hangman(word);
hangman.word_gen();


function mapKey() {
  var els = document.getElementsByTagName("a");
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("click", getKey);
  }
}

function getKey(event) {
  console.log("The pressed key is " + event.target.innerHTML);
  //document.getElementById('demo').innerHTML = event.target.innerHTML;
  var key = event.target.innerHTML;
  var findit = false;
  console.log("The word in getKey is " + word);
  for (var i = 0; i != word.length; i++) {
    var worddiv = document.getElementsByClassName('wordWindow')[0];
    var childnode = worddiv.childNodes[i + 1].innerHTML;
    if (key == word[i]) {
      worddiv.childNodes[i + 1].innerHTML = key;
      findit = true;
    }
  }
  if (findit) {
    hangman.update(true);
  } else {
    hangman.update(false);
  }
}



function Hangman(word) {
  this.word = word;
  this.attempts = 0;

  this.word_gen = function word_gen() {
    var x = this.word;
    var worddiv = document.getElementsByClassName('wordWindow')[0];
    console.log(x);
    for (var i = 0; i != x.length; i++) {
      var para = document.createElement('p');
      if (word[i] == " ") {
        var text = document.createTextNode("\t");
      } else {
        var text = document.createTextNode("?");
      }
      para.appendChild(text);
      worddiv.appendChild(para);
    }
  }

  this.update = function update(bool) {
      var worddiv = document.getElementsByClassName('wordWindow')[0];
      var childnodes = worddiv.childNodes;
      var arr = [];
      for(var x = 1; x!=childnodes.length; x++){
        arr.push(childnodes[x].innerHTML);
      }
      console.log(arr);
      if(!arr.includes("?")){
        gameover = true;
        var info = document.getElementById('info');
        document.getElementById('info_text').innerHTML = "You win! Try another one!";
        info.style.display = "initial";
        disable_key();
      }

    if (!bool) {
      this.attempts += 1;
      if(this.attempts!=8){
      console.log("This the " + this.attempts + " try");
      document.getElementById('attempt').innerHTML = this.attempts+"/8";
      this.draw();
    }
    else{
      gameover = true;
      disable_key();
      var info = document.getElementById('info');
      document.getElementById('info_text').innerHTML = "Executed! Try next one!";
      info.style.display = "initial";
    }
  }
  }



  this.draw = function draw() {
    var x = this.attempts;
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext('2d');
    if (x == 1) {
      c.beginPath();
      c.moveTo(80, 140);
      c.lineTo(120, 140);
      c.stroke();
    } else if (x == 2) {
      c.beginPath();
      c.moveTo(100, 140);
      c.lineTo(100, 20);
      c.stroke();
    } else if (x == 3) {
      c.beginPath();
      c.moveTo(100, 20);
      c.lineTo(160, 20);
      c.lineTo(160, 35);
      c.stroke();
    } else if (x == 4) {
      c.beginPath();
      c.arc(160, 45, 10, 0, 2 * Math.PI);
      c.stroke();
    } else if (x == 5) {
      c.beginPath();
      c.moveTo(160, 55);
      c.lineTo(160, 95);
      c.lineTo(145, 115);
      c.stroke();
      c.beginPath();
      c.moveTo(160, 95);
      c.lineTo(175, 115);
      c.stroke();
    } else if (x == 6) {
      c.beginPath();
      c.moveTo(160, 65);
      c.lineTo(175, 55);
      c.stroke();
      c.beginPath();
      c.moveTo(160, 65);
      c.lineTo(145, 55);
      c.stroke();
    } else if (x == 7) {
      c.beginPath();
      c.arc(160, 55, 5, 1.25 * Math.PI, 1.75 * Math.PI);
      c.stroke();
    }
  }
}

function button_handler(){
  if(gameover!=true){
  var info = document.getElementById('info');
  info.style.display = "none";
  mapKey();
}
  else{
    location.reload();
}
}

function disable_key(){
  var els = document.getElementsByTagName("a");
  for (var i = 0; i < els.length; i++) {
    els[i].removeEventListener("click", getKey);
  }
}
