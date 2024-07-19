// script.js

document.getElementById('createTableButton').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rows').value, 10);
    const columns = parseInt(document.getElementById('columns').value, 10);

    if (rows > 0 && columns > 0) {
        createTable(rows, columns);
        // Show the table and message, and hide other elements
        document.getElementById('tableContainer').style.display = 'grid';
        document.getElementById('message').style.display = 'block';
        document.getElementById('diagonalSumButton').style.display = 'none';
        document.getElementById('additionalButtons').style.display = 'none';
        document.getElementById('sumResult').textContent = ''; // Clear previous results
    } else {
        alert('Please enter valid numbers for rows and columns.');
    }
});

document.getElementById('diagonalSumButton').addEventListener('click', function() {
    document.getElementById('additionalButtons').style.display = 'flex';
});

document.getElementById('leftDiagonalSumButton').addEventListener('click', function() {
    calculateDiagonalSum('left');
});

document.getElementById('rightDiagonalSumButton').addEventListener('click', function() {
    calculateDiagonalSum('right');
});

function createTable(rows, columns) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
    const cellSize = 60; // Ensure each cell and input fit well

    for (let i = 0; i < rows * columns; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = '';
        div.appendChild(input);
        tableContainer.appendChild(div);
    }

    // Show the diagonal sum button if the table is created successfully
    document.getElementById('diagonalSumButton').style.display = 'block';
}

function calculateDiagonalSum(diagonal) {
    const inputs = document.querySelectorAll('#tableContainer input');
    const rows = parseInt(document.getElementById('rows').value, 10);
    let sum = 0;

    for (let i = 0; i < rows; i++) {
        if (diagonal === 'left') {
            sum += parseInt(inputs[i * rows + i].value) || 0;
        } else if (diagonal === 'right') {
            sum += parseInt(inputs[i * rows + (rows - 1 - i)].value) || 0;
        }
    }

    document.getElementById('sumResult').textContent = `${diagonal.charAt(0).toUpperCase() + diagonal.slice(1)} Diagonal Sum: ${sum}`;
}
