// from data.js
let tableData = data;

// select the body of the table where data will be populated
let tbody = d3.select("tbody");

function createTable(data) {
  tbody.html("");

  // create table rows and cells, then fill in info from data.js
  data.forEach(ufoSightings => {
      let row = tbody.append("tr");
      Object.entries(ufoSightings).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
      });
    });
}
// search date/time to find matches
// Getting a reference to the button on the page
function clickButton() {
  d3.event.preventDefault();
  let inputField = d3.select("#datetime");

  let inputValue = inputField.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  let dateSearch = tableData.filter(data => data.datetime === inputValue);
createTable(dateSearch);
}

d3.select("#filter-btn").on("click", clickButton);

createTable(tableData);