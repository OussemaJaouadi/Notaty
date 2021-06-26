function updateNotesTable() {
    var table = document.getElementById("notes-table");
    getNotes().then(data => {
        data.forEach((note) => {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = note['title'];
            var cell2 = row.insertCell(1);
            cell2.innerHTML = note['content'];
            var cell3 = row.insertCell(2);
            cell3.innerHTML = note['updatedDate'];
            var cell4 = row.insertCell(3);
        });

    })
};