const notesContainers = document.querySelector(".noteList");
const createBtn = document.querySelector(".createBtn");
const deleteBtn = document.querySelectorAll(".deleteImage");

createBtn.addEventListener("click", createNote);
// deleteBtn.addEventListener("click", deleteNode);

function createNote() {
    // let nodelist = document.createElement('div');
    // nodelist.className = 'noteList';

    let paraNote = document.createElement('p')
    paraNote.className = 'node';
    paraNote.setAttribute("contenteditable", "True")

    let img = document.createElement('img');
    img.src = "images/delete.png";
    img.className = 'deleteImage';

    paraNote.appendChild(img);

    notesContainers.appendChild(paraNote);
}

notesContainers.addEventListener("click", (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".node");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
})

function updateStorage() {
    localStorage.setItem("notes", notesContainers.innerHTML);
}

function showStorage() {
    notesContainers.innerHTML = localStorage.getItem("notes");
}

showStorage();

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})