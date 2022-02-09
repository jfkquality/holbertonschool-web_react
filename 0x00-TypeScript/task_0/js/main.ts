interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'Joe',
    lastName: 'Schmoe',
    age: 25,
    location: 'Hollywood',
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Schmane',
    age: 23,
    location: 'Los Angeles',
}

const studentsList: Array<Student> = [student1, student2];
// let body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbl: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tblBody: HTMLTableSectionElement = document.createElement("tbody");
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');
// const trHead: HTMLTableRowElement = thead.insertRow();
// const th1: HTMLTableCellElement = trHead.insertCell();
// const th2: HTMLTableCellElement = trHead.insertCell();

th1.innerHTML = "Name";
th2.innerHTML = "Location";

tbl.append(thead);
tbl.append(tblBody);
thead.append(trHead);
trHead.append(th1);
trHead.append(th2);

studentsList.forEach((student) => {
// for (const student of studentsList ) {
    const row: HTMLTableRowElement = tbl.insertRow();
    tblBody.append(row);
    const td1: HTMLTableCellElement = row.insertCell();
    const text1: Text = document.createTextNode(student.firstName);
    td1.appendChild(text1);
    // let text: string = document.createTextNode(student.firstName);
    // td.appendChild(text);
    const td2: HTMLTableCellElement = row.insertCell();
    const text2: Text = document.createTextNode(student.location);
    td2.appendChild(text2);
})

document.body.appendChild(tbl);
