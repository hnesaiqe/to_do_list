window.onload = () => {
  const form1 = document.querySelector('#addForm1');
  const form2 = document.querySelector('#addForm2');

  let items = document.getElementById('items');
  let submit = document.getElementById('submit');


  let editItem = null;

  form1.addEventListener('submit', addItem);
  items.addEventListener('click', removeItem);
};



// Ajouter une tâche


function addItem(e) {
  e.preventDefault();
  var li = document.createElement('li');
  var inputVal = document.getElementById("item").value;
  var t = document.createTextNode(inputVal);

  li.appendChild(t);

  if (inputVal === '') {
    alert("Saisie une tâche !");
  } else {
    document.getElementById("items").appendChild(li);
  }
  document.getElementById("item").value = "";

  var spanDel = document.createElement("button");
  var txt = document.createTextNode("Delete");
  var spanEdit = document.createElement("button");
  var txt1 = document.createTextNode(" \u270E ");

  spanDel.className = "close ml-1 bg-success p-1 rounded";
  spanDel.appendChild(txt);
  li.appendChild(spanDel);

  spanEdit.className = "edit float-right mr-1 mb-1 bg-danger p-1 rounded";
  spanEdit.appendChild(txt1);
  li.appendChild(spanEdit);

}

// Bouton supprimer

function removeItem(e) {
  e.preventDefault();

  var close = document.getElementsByClassName("close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      alert('Etes-vous sûr de vouloir supprimer cette tâche ??')
    }
  }
}

// bouton Edit


function editItemTest() {

  alert("cool");
  var test = document.getElementsByTagName("li");
  for (i = 0; i < test.length; i++) {
    test[i].onclick = function () {
      var ediTask = this.innerText;
      document.getElementById("item").value = ediTask;
    }
  }
}

function toggleButton (ref, btnID){

}

