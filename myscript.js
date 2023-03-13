const INITIAL_TEXT = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

$(document).ready(function () {
    $("#editor").html(INITIAL_TEXT);
    $("#preview").html(marked.parse($("#editor").val()));

    console.log("hello js");

    $("#editor").on("input", function (){
        $("#preview").html(marked.parse($("#editor").val()));
    })
});


