const urlTable = "https://joy935.github.io/wdd230/project/data/rentals.json";

const rentalsTable = document.querySelector('.rentals-table');

const getTable = async () => {
    try {
        const response = await fetch(urlTable);
        const data = await response.json();
        displayTable(data.rentals);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

const displayTable = (rentals) => {
    const tbody = rentalsTable.querySelector('tbody');

    rentals.forEach(rental => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = rental.rentaltype;
        titleCell.classList.add('table-title');
        row.appendChild(titleCell);

        const maxPersonsCell = document.createElement('td');
        maxPersonsCell.textContent = rental.numberperson;
        maxPersonsCell.setAttribute('data-name', 'Max. Persons');
        row.appendChild(maxPersonsCell);

        const reservationHalfDayCell = document.createElement('td');
        reservationHalfDayCell.textContent = rental.reservation.halfday;
        reservationHalfDayCell.setAttribute('data-name', 'Reservation Half Day');
        row.appendChild(reservationHalfDayCell);

        const reservationFullDayCell = document.createElement('td');
        reservationFullDayCell.textContent = rental.reservation.fullday;
        reservationFullDayCell.setAttribute('data-name', 'Reservation Full Day');
        row.appendChild(reservationFullDayCell);

        const walkInHalfDayCell = document.createElement('td');
        walkInHalfDayCell.textContent = rental.walkin.halfday;
        walkInHalfDayCell.setAttribute('data-name', 'Walk-in Half Day');
        row.appendChild(walkInHalfDayCell);

        const walkInFullDayCell = document.createElement('td');
        walkInFullDayCell.textContent = rental.walkin.fullday;
        walkInFullDayCell.setAttribute('data-name', 'Walk-in Full Day');
        row.appendChild(walkInFullDayCell);

        tbody.appendChild(row);
    });
}


getTable();
