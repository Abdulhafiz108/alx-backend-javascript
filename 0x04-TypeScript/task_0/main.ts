interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "City1"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "City2"
};

const studentsList: Student[] = [student1, student2];
const tableBody = document.getElementById("studentTableBody");

studentsList.forEach(student => {
  const newRow = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  newRow.appendChild(firstNameCell);
  newRow.appendChild(locationCell);
  tableBody.appendChild(newRow);
});
