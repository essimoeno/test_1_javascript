
var to_verify = [
    [4, 2, 1, 3, 5, 7, 9, 8, 6],
    [9, 8, 3, 7, 6, 2, 5, 1, 4],
    [1, 5, 6, 8, 9, 4, 7, 2, 3],
    [2, 3, 9, 1, 8, 5, 4, 6, 7],
    [7, 4, 1, 6, 3, 9, 2, 5, 8],
    [5, 6, 8, 2, 4, 7, 1, 3, 9],
    [8, 7, 2, 9, 1, 3, 6, 4, 5],
    [3, 9, 5, 4, 2, 6, 8, 7, 1],
    [6, 1, 4, 5, 7, 8, 3, 9, 2]
];

function F11() {
    //Declaration of the variables
    let table_digits = to_verify;
    let to_check = [[]];

    for (let i = 0; i < table_digits.length; i++) {

        let row = Math.floor(i / 9);
        let col = i % 9;
        if (!to_check[row]) {
            to_check[row] = [];
        }
        to_check[row][col] = table_digits[i];
    }

}
function F12() {
    var tableHtml = "<table id='myTable' border='1'>";
    for (var i = 0; i < to_verify.length; i++) {
        tableHtml += "<tr>";
        for (var j = 0; j < to_verify[i].length; j++) {
            tableHtml += "<td>" + to_verify[i][j] + "</td>";
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";

    document.body.innerHTML += tableHtml;
}


function F21(A) {
    let row = A.getElementsByTagName("tr");
    if (A.length === 9 && Array.isArray(A)) {
        for (let i = 0; row.length; i++) {
            let cell = A.getElementsByTagName("td");
            for (let j = 0; j < cell.length; j++) {
                let value = cell[j].textContent || celdas[j].innerText;
                alert('valor en fila' + (i + 1) + ", columna " + (j + 1) + ": " + value);
            }
        }
    }

}

