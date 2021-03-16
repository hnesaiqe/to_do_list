window.onload = () => {
    const form1 = document.querySelector('#addForm1');
    const form2 = document.querySelector('#addForm2');
  
    let items = document.getElementById('items');
    let submit = document.getElementById('submit');
  
    let editItem = null;
  
    form1.addEventListener('submit', addItem);
    items.addEventListener('click', removeItem);
  };
  
  function addItem(e) {
    e.preventDefault();
    /**
     *
     * a vous de jouer
     */
    document.getElementById('submit')
  }
  
  function removeItem(e) {
    e.preventDefault();
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
  }
  
  function toggleButton(ref, btnID) {
    /**
     *
     * a vous de jouer
     */
  }

  