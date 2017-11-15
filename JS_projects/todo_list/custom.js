function mapBTN() {
  var button = document.getElementById('add');
  button.addEventListener("click", myfunction);
  var del = document.getElementsByClassName('delete')[0];
  del.addEventListener("click", finished);
  var del = document.getElementsByClassName('delete')[1];
  del.addEventListener("click", finished);
  var apply = document.getElementById('apply');
  apply.addEventListener("click", apple);
  console.log(apply);
}

var modal = document.getElementById('modal');

mapBTN();

function myfunction() {
  modal.style.display = "block";
}

function apple() {
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var thing = document.getElementById('event').value;
  console.log(date);
  console.log(time);
  console.log(thing);
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(thing));
  datediv = document.createElement('div');
  datediv.appendChild(document.createTextNode(date));
  timediv = document.createElement('div');
  timediv.appendChild(document.createTextNode(time));
  console.log(date);
  console.log(time);
  item.appendChild(datediv);
  item.appendChild(timediv);
  var done = document.createElement('button');
  done.className = "delete";
  done.innerHTML = "Done";
  done.type = "button";
  done.onclick = finished;
  item.appendChild(done);
  item.className = "item";
  var list = document.getElementById('list');
  list.appendChild(item);

  modal.style.display = "none";
}

function finished() {
  var item = event.target.parentNode;
  var list = document.getElementById('list');
  list.removeChild(item);
}
