let myForm = document.querySelector('form');
let eName = document.getElementById("name");
let eId = document.getElementById("docID");
let eDepartment = document.getElementById('dept');
let eExperience = document.getElementById('exp');
let eEmail = document.getElementById('email');
let eNumber = document.getElementById('mbl');
let content = document.querySelector('tbody');
let allData = [];

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = {};
    data.name = eName.value;
    data.id = eId.value;
    data.depart = eDepartment.value;
    data.exp = eExperience.value;
    data.email = eEmail.value;
    data.num = eNumber.value;
    allData.push(data);

    content.innerHTML = null;
    allData.map((element, index) => {
        let row = document.createElement('tr');
        let column1 = document.createElement('td');
        let column2 = document.createElement('td');
        let column3 = document.createElement('td');
        let column4 = document.createElement('td');
        let column5 = document.createElement('td');
        let column6 = document.createElement('td');
        let column7 = document.createElement('td');
        let column8 = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerText = "Delete";
        btn.style.backgroundColor= 'brown';
        btn.style.border = 'none'; 
        btn.setAttribute("data-index", index);
        btn.addEventListener("click", deleteRow);
        column8.append(btn);
        column8.style.backgroundColor = 'brown';

        column1.innerText = element.name;
        column2.innerText = element.id;
        column3.innerText = element.depart;
        column4.innerText = element.exp;
        column5.innerText = element.email;
        column6.innerText = element.num;
        if (column4.innerText > 5) {
            column7.innerText = "Senior";
        } else if (column4.innerText >= 2 && column4.innerText <= 5) {
            column7.innerText = "Junior";
        } else if (column4.innerText <= 1) {
            column7.innerText = "Traniee";
        }
        row.append(column1, column2, column3, column4, column5, column6, column7, column8);
        content.append(row);
    })
});

// Function to triger the particular row and delete it, and then
// recreate the whole table again
function deleteRow(event) {
    let index = event.target.getAttribute("data-index");
    allData.splice(index, 1);
    redrawTable();
}

function redrawTable() {
    content.innerHTML = null;
    allData.map((element, index) => {
        let row = document.createElement('tr');
        let column1 = document.createElement('td');
        let column2 = document.createElement('td');
        let column3 = document.createElement('td');
        let column4 = document.createElement('td');
        let column5 = document.createElement('td');
        let column6 = document.createElement('td');
        let column7 = document.createElement('td');
        let column8 = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerText = "Delete";
        btn.style.backgroundColor= 'brown';
        btn.style.border = 'none'; 
        btn.setAttribute("data-index", index);
        btn.addEventListener("click", deleteRow);
        column8.append(btn);
        column8.style.backgroundColor= 'brown';

        column1.innerText = element.name;
        column2.innerText = element.id;
        column3.innerText = element.depart;
        column4.innerText = element.exp;
        column5.innerText = element.email;
        column6.innerText = element.num;
        if (column4.innerText > 5) {
            column7.innerText = "Senior";
        } else if (column4.innerText >= 2 && column4.innerText <= 5) {
            column7.innerText = "Junior";
        } else if (column4.innerText <= 1) {
            column7.innerText = "Traniee";
        }
        row.append(column1, column2, column3, column4, column5, column6, column7, column8);
        content.append(row);
    })
}
