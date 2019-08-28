function convert() {
  preventDefault();
  selectedOption();
  getFile();
}

function preventDefault() {
  if (document.getElementById("file").value != "") {
    const form = document.getElementById("form");
    form.addEventListener("click", function(e) {
      e.preventDefault();
    });
  }
}

function selectedOption() {
  const select = document.getElementById("select").value;
  option = parseInt(select);
  switch (option) {
    case 1:
      console.log("JSON");
      break;
    case 2:
      console.log("XML");
      break;
    case 3:
      console.log("HTML");
  }
}

function getFile() {
  const input = document.getElementById("file").value;
  input.addEventListener(
    "change",
    function() {
      console.log("something");
    }
  );
}
