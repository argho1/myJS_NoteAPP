import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Notes has been added!");
    },
    onNoteSelect(id) {
        console.log("node selected " + id);
    },
    onNoteDelete(id) {
        console.log("node deleted " + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    },
});


view.updateNoteList(NotesAPI.getAllNotes());