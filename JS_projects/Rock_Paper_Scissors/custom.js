var win = 0;
var lose =0;
var total = 0;

function restart(){
  /*win = 0;
  total = 0;
  document.getElementById('rounds').innerHTML= win +"/"+ total;
  document.getElementById('result').innerHTML="VS";
  */
  location.reload();
}
function stop(){
  var eles = document.getElementsByTagName('img');
  for(var i = 0;i!=eles.length;i++){
    eles[i].onclick = false;
  }
  document.getElementById('win').innerHTML= win;
  document.getElementById('lose').innerHTML= lose;
  document.getElementById('total').innerHTML= total;
  document.getElementById('result').innerHTML="Well Played!Game End!";

}

function fight(x){
  total += 1;

  var n = Math.floor(Math.random() *3);
  console.log(n);
  if(n==0){
    document.getElementById('bot').src= "./rock.png";
  }
  else if(n==1){
    document.getElementById('bot').src= "./paper.png";
  }
  else if(n==2){
    document.getElementById('bot').src= "./scissors.png";
  }


  if(x=="rock"){
    console.log("yes");
    document.getElementById('player').src= "./rock.png";
    if(n==0){
      document.getElementById('result').innerHTML="Draw";
    }
    else if(n==1){
      document.getElementById('result').innerHTML="You Lose :(";
      lose+=1;
    }
    else if(n==2){
      document.getElementById('result').innerHTML="You Win :)";
      win+=1;
    }
  }
  else if(x=="paper"){
    console.log("yes");
    document.getElementById('player').src= "./paper.png";
    if(n==0){
      document.getElementById('result').innerHTML="You Win :)";
      win+=1;
    }
    else if(n==1){
      document.getElementById('result').innerHTML="Draw";
    }
    else if(n==2){
      document.getElementById('result').innerHTML="You Lose :(";
      lose+=1;
    }
  }

  else if(x=="scissors"){
    console.log("yes");
    document.getElementById('player').src= "./scissors.png";
    if(n==0){
      document.getElementById('result').innerHTML="You Lose :(";
      lose+=1;
    }
    else if(n==1){
      document.getElementById('result').innerHTML="You Win :)";
      win+=1;
    }
    else if(n==2){
      document.getElementById('result').innerHTML="Draw";
    }
  }
  if(win>9){
    document.getElementById('win').innerHTML= win;
    document.getElementById('lose').innerHTML= lose;
    document.getElementById('total').innerHTML= total;
    document.getElementById('result').innerHTML="Well Played!Game End!";
    stop();
  }
  else{
    document.getElementById('win').innerHTML= win;
    document.getElementById('lose').innerHTML= lose;
    document.getElementById('total').innerHTML= total;
  }
}
