// from data.js
var tableData = data;

var table = d3.select('#ufo-table');

var tbody = d3.select('tbody');

tableData.forEach(dictionary => {
    var row = tbody.append('tr');

    Object.entries(dictionary).forEach(([key ,value]) => {
        // console.log(key,value);

        var cell = row.append('td');
        cell.text(value);
    
    });
}); 

var button = d3.select('#filter-btn');
// console.log(button)
button.on('click', function() { 
    var htmlSelect = d3.select('#datetime');

    var htmlValue = htmlSelect.property('value');

    console.log(htmlValue);

    var viewData = tableData.filter(dictionary => dictionary.datetime === htmlValue);
    // console.log(viewData);

    tbody.html('');

    viewData.forEach(dictionary => {
        var row = tbody.append('tr');

        Object.entries(dictionary).forEach(([key ,value]) => {
        // console.log(key,value);

            var cell = row.append('td');
            cell.text(value);
        });
    });
});

    // ATTACH TABLE TO CONTAINER
    // document.getElementById("table-area").appendChild(tableData);
    // });