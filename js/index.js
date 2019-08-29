function convert() {
  selectOption();
  preventDefault();
}

function preventDefault() {
  const form = document.getElementById("form");
  form.addEventListener("click", function(e) {
    e.preventDefault();
  });
}

function selectOption() {
  const select = document.getElementById("select").value;
  option = parseInt(select);
  switch (option) {
    case 1:
      convertToJSON();
      break;
    case 2:
      convertToXML();
      break;
    case 3:
      convertToHTML();
      break;
    default:
      alert("Choose a file");
  }
}

function convertToHTML() {
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

function convertToXML() {
  $(document).ready(function() {
    $.ajax({
      url: "archivo.csv",
      dataType: "text",
      success: function(data) {
        let csvData = data;

        csvData = csvData.split("\n").map(row => row.trim());

        let headings = csvData[0].split(",");

        let xml = ``;

        for (let i = 1; i < csvData.length; i++) {
          let details = csvData[i].split(",");
          xml += "<productData>\n";
          for (let j = 0; j < headings.length; j++) {
            xml += `<${headings[j]}>${details[j]}</${headings[j]}>
  `;
          }
          xml += "</productData>\n";
        }

        console.log(xml);
      }
    });
  });
}

function convertToJSON() {
  $(document).ready(function() {
    $.ajax({
      url: "archivo.csv",
      dataType: "text",
      success: function(data) {
        var lines = data.split("\n");

        var result = [];

        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split(",");

          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj);
        }
        console.log (JSON.stringify(result))
      }
    });
  });
}
