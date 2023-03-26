const expenditureData = [];

const categoryValues = {
    "": -1,
    "Jedzenie": 0,
    "Rozrywka": 1,
    "Rachunki": 2
};

function initializePage() {
    console.log(document);
    const inputText = document.getElementById('kwota');
    const myButton = document.getElementById('button_plus');
    console.log(inputText);
    console.log(myButton);
    const list = document.querySelector('.container ul');
    myButton.addEventListener('click', (e) => {
        if (inputText.value != "") {
            e.preventDefault();
            const myLi = document.createElement('li');
            myLi.innerHTML = inputText.value;
            list.appendChild(myLi);
            const mySpan = document.createElement('span');
            mySpan.innerHTML = 'x';
            myLi.appendChild(mySpan);
        }
        const close = document.querySelectorAll('span'); //const jest stała
        for (let i = 0; i < close.length; i++) { //let będzie się zmieniała
            close[i].addEventListener('click', () => {
                close[i].parentElement.style.opacity = 0;
                setTimeout(() => {
                    close[i].parentElement.style.display = "none";
                    close[i].parentElement.remove();

                }, 500);

            })
        }
        inputText.value = "";
    })
}

function addElementToTable(nowaKategoria, nowaDate, nowaKwota, nowaNazwa){
    expenditureData.push({
        nazwa:nowaNazwa,
        kategoria:nowaKategoria,
        data:nowaDate,
        kwota:nowaKwota
    });
   
    const table =  document.getElementById("table");
    const row = table.insertRow(1);
    const nameCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const categoryCell = row.insertCell(2);
    const amountCell = row.insertCell(3);
    const buttonCell = row.insertCell(4);
    nameCell.innerHTML = nowaNazwa;
    dateCell.innerHTML = nowaDate;
    categoryCell.innerHTML = nowaKategoria;
    amountCell.innerHTML = nowaKwota;
    
    // Dodawanie przycisku "Usuń"
     const btnUsun = document.createElement("button");
     btnUsun.textContent = "Usuń";
     btnUsun.classList.add("usun-btn");
     btnUsun.addEventListener("click", function () {
         row.remove();
     });
     buttonCell.appendChild(btnUsun);    
}


// function createTable(){
//     var html = "<table border='1|1' class='table'>"
//     html += "<thead>";
//     html += "<tr>";
//     html += "<td>";
//     html += "<td>" + 'Nazwa' + "</td>";
//     html += "<td>" + 'Data' + "</td>";
//     html += "<td>" + 'Kategoria' + "</td>";
//     html += "<td>" + 'Kwota' + "</td>";
//     html += "<tr>";
//     html += "<thead>";

//     html += "</table>";
//     document.getElementById("table").innerHTML = html
// }

async function addOnClick() {
    const nazwa = document.getElementById("nazwa").value;
    const data = document.getElementById("data").value;
    const kategoria = document.getElementById("kategoria").value;
    const kwota = document.getElementById("kwota").value;

    const kategoriaValue = categoryValues[kategoria];
    addElementToTable(kategoria, data, kwota, nazwa);

    // wyczyszczenie pól formularza
    document.getElementById("nazwa").value = "";
    document.getElementById("data").value = "";
    document.getElementById("kategoria").value = "";
    document.getElementById("kwota").value = "";

    await sendExpenditure(kategoriaValue, data, kwota, nazwa);
}

async function displayData() {
    const data = await HttpService.get("https://localhost:7183/Expenditure");
    const dataList = document.getElementById("data-list");
    data.forEach(item => {
        const categoryString = getCategoryString(item.category); // pobranie stringa odpowiadającego wartości enuma Category
        const row = dataList.insertRow();
        const nameCell = row.insertCell(0);
        const amountCell = row.insertCell(1);
        const dateCell = row.insertCell(2);
        const categoryCell = row.insertCell(3);
        nameCell.textContent = item.name;
        amountCell.textContent = item.amount;
        dateCell.textContent = new Date(item.date).toLocaleDateString();
        categoryCell.textContent = categoryString;
    });
}


    
    function getCategoryString(category) {
    switch(category) {
    case 0:
    return "Zakupy";
    case 1:
    return "Rozrywka";
    case 2:
    return "Rachunki";
    default:
    return "";
    }
    }
    
    displayData();

async function sendExpenditure(kategoria, date, kwota, nazwa) {
    await HttpService.post("https://localhost:7183/Expenditure", {name:nazwa, amount:kwota, date:date, category:kategoria})
}


setTimeout(() => {
    initializePage();
}, 500
);