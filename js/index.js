showNotes();

// local storages store in key value onekey has many many values in form of array object.

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  // getItem will alwya return object in string that stirng array
  // we will have convert it into object using parse
  console.log(notes);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  showNotes();
});
// function to show notes from local storage:
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary bg-dark">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `<h3>Nothing to show! Use "Add a Note" section above to add notes.</h3>`;
    }
  }
  function deleteNote(index){
    
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  // spice method is use delete or remove item form list or array
  //first parameter is form where or which indeex have to remove and 
  //second paramenter is no of item delete.
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
    
  }
  const search = () =>  {
      let searchText = document.getElementById("search-text").value;
      let noteCard = document.getElementsByClassName("noteCard");
      
      Array.from(noteCard).forEach(element => {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(searchText)){
          element.style.display = "block";
        }
        else{
          element.style.display = "none";
        }

      })
      

  }