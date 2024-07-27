const editor = document.querySelector("#editor");

// import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
// create a function and wrap the code in it, so i can display the inline editor when the user clicks the button
function createEditor() {
  create(editor, {
    plugins: [Essentials, Bold, Italic, Font, Paragraph, CodeBlock],
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "bold",
        "italic",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "codeBlock",
      ],
    },
    // toolbar: ['CodeBlock']
  })
    .then(/* ... */)
    .catch(/* ... */);
}

// Call the function when the user clicks a button
const createEditorButton = document.querySelector(".cta button");

// add the eventlistner only when the dom is loaded
document.addEventListener("DOMContentLoaded", () => {
  createEditorButton.addEventListener("click", createEditor);
});
