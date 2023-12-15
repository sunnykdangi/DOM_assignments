let myForm = document.querySelector('form');
let inptask = document.getElementById('task');
let priority = document.getElementById('priority');
let content = document.querySelector('tbody');
let allData = [];


myForm.addEventListener('submit',function(event){
    event.preventDefault();

    let data = {};
    data.input1 = inptask.value;
    data.input2 = priority.value;
    allData.push(data);
    console.log(allData);

    content.innerHTML = null;   
    allData.map((element)=>{
        let row = document.createElement('tr');
        let column1 = document.createElement('td');
        let column2 = document.createElement('td');
        
        column1.innerText = element.input1;
        column2.innerText = element.input2;
        row.append(column1,column2);
        content.append(row);
        if(element.input2 =="High"){
            column2.style.backgroundColor = 'red';
        }
        else{
            column2.style.backgroundColor = 'green';
        }
    })

})