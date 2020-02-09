// from data.js
var tableData = data;

var table = d3.select('#ufo-table');

var tbody = d3.select('tbody');

tableData.forEach(dictionary => {
    var row = tbody.append('tr');

    Object.entries(dictionary).forEach(([key,value]) => {
        console.log(key,value);

        var cell = row.append('td');
        cell.text(value);
    
    });
}); 

Element.addEventListener("load", function(){

    var perrow = 6, // 3 items per row
        count = 0, // Flag for current cell
        table = document.createElement("ufo-table"),
        row = tableData.insertRow();

    for (var i of tableData) {
        var cell = row.insertCell();
        cell.innerHTML = i;

        // You can also attach a click listener if you want
        cell.addEventListener("click", function(){
        alert("Greetings");
        });

        // Break into next row
        count++;
        if (count%perrow==0) {
        row = tableData.insertRow();
        }
    }

    // ATTACH TABLE TO CONTAINER
    document.getElementById("table-area").appendChild(tableData);
    });