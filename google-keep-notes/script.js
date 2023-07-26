const addButton = document.querySelector("#add");

const uploadLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = " ") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
            <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>

<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea> `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  console.log(note);
  // it append a node and add last child as a node
  document.body.appendChild(note);

  // getting refrences of element
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  //deleteing note
  delButton.addEventListener("click", () => {
    note.remove();
    uploadLSData();
  });

  // toggle  using edit button

  textArea.value = text;
  mainDiv.value = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    mainDiv.value = value;
    uploadLSData();
  });
};

// getting data back from localstorage
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());
