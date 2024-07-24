const editor = document.querySelector("#editor");
import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Paragraph,
  CodeBlock
} from "ckeditor5";

ClassicEditor.create(editor, {
  plugins: [Essentials, Bold, Italic, Font, Paragraph, CodeBlock],
//   toolbar: {
//     items: [
//       "undo",
//       "redo",
//       "|",
//       "bold",
//       "italic",
//       "|",
//       "fontSize",
//       "fontFamily",
//       "fontColor",
//       "fontBackgroundColor",
//       'codeBlock' ,
//     ],
//   },
    toolbar: ['CodeBlock']
})
  .then(/* ... */)
  .catch(/* ... */);
