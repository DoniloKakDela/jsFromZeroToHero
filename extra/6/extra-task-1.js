function createCalendar(elem, year, month) {
  const date = new Date(year, month - 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  let table = `<table>
    <tr>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
      <th>Sun</th>
    </tr>
    <tr>
    <style>
    table {
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid black;
      padding: 5px;
      text-align: center;
    }
  </style>`;

  for (let i = 0; i < (date.getDay() || 7) - 1; i++) {
    table += '<td></td>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    table += `<td>${i}</td>`;

    if ((date.getDay() || 7) % 7 == 0 && i < daysInMonth) {
      table += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  for (let i = date.getDay(); i > 1 && i <= 7; i++) {
    table += '<td></td>';
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

const cal = document.createElement('div');
document.body.appendChild(cal);
createCalendar(cal, 2012, 9);