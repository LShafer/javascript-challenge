// Alternative Solution

// from data.js
let tableData = data;
// select the body of the table where data will be populated
let tbody = d3.select("tbody");
tbody.html("");
// create table rows and cells, then fill in info from data.js
tableData.forEach(ufoSightings => {
  let row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});
// search date/time to find matches
// Getting a reference to the button on the page
let button = d3.select("#filter-btn");
// set instructions for when the button is clicked
button.on("click", function() {
   d3.event.preventDefault();
   let inputField = d3.select("#datetime");
   let inputValue = inputField.property("value");
   console.log(button);
   console.log(inputValue);
   console.log(tableData);
   let filtersearchdata = tableData.filter(data => data.datetime === inputValue);
   console.log(filtersearchdata);
   let tbody = d3.select("tbody");
   tbody.html("");
   filtersearchdata.forEach(function(newUFOdata) {
   let row = tbody.append("tr");
   Object.entries(newUFOdata).forEach(([key, value]) => {
   let cell = row.append("td");
   cell.text(value);
  });
});
});
