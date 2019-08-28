function convert() {
  selectedOption();
}

function preventDefault() {
  const form = document.getElementById("form");
  form.addEventListener("click", function(e) {
    e.preventDefault();
  });
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
      convertToHTML();
  }
}

function convertToHTML() {
  preventDefault();

  $(document).ready(function() {
    $.ajax({
      url: "archivo.csv",
      dataType: "text",
      success: function(data) {
        var employee_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="table table-bordered table-striped">';
        for (var count = 0; count < employee_data.length; count++) {
          var cell_data = employee_data[count].split(",");
          table_data += "<tr>";
          for (
            var cell_count = 0;
            cell_count < cell_data.length;
            cell_count++
          ) {
            if (count === 0) {
              table_data += "<th>" + cell_data[cell_count] + "</th>";
            } else {
              table_data += "<td>" + cell_data[cell_count] + "</td>";
            }
          }
          table_data += "</tr>";
        }
        table_data += "</table>";
        $("#employee_table").html(table_data);
      }
    });
  });
}
