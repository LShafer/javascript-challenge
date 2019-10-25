// from data.js
var tableData = data;

// select the body of the table where data will be populated
var tbody = d3.select("tbody");

tbody.html("");

// create table rows and cells, then fill in info from data.js
data.forEach(ufoSightings => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// search date/time to find matches
// Getting a reference to the button on the page
var button = d3.select("#filter-btn");

// set instructions for when the button is clicked
button.on("click", function() {
  d3.event.preventDefault();
  var inputField = d3.select("#datetime");

  var inputValue = inputField.property("value");

  console.log(button);
  console.log(inputValue);
  console.log(tableData);

  var dateSearch = tableData.filter(data => data.datetime === inputValue);

  console.log(dateSearch);

  dateSearch = d3.select("tbody");
  // dateSearch.html("");
  Array.from(dateSearch).forEach(dateRow => {
    var row = tbody.append("tr");
    Object.entries(dateRow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  
});