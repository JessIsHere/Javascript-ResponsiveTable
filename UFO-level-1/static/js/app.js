// from data.js
var tableData = data;

element.addEventListener("load", function(){



    var perrow = 6, // 3 items per row
        count = 0, // Flag for current cell
        table = document.createElement("table"),
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

// YOUR CODE HERE!
