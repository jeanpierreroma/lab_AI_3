const arr_1 = [
    ["Менеджер", 0.9, 0.9, 0.8, 0.4, 0.5, 0.3, 0.6, 0.2, 0.9, 0.8],
    ["Програміст", 0.8, 0.5, 0.9, 0.3, 0.1, 0.2, 0.2, 0.2, 0.5, 0.5],
    ["Шофер", 0.3, 0.9, 0.6, 0.5, 0.9, 0.8, 0.9, 0.8, 0.6, 0.3],
    ["Референт", 0.5, 0.4, 0.5, 0.5, 0.2, 0.2, 0.3, 0.3, 0.9, 0.8],
    ["Перекладач", 0.7, 0.8, 0.8, 0.2, 0.6, 0.2, 0.2, 0.3, 0.3, 0.2]
]
const arr_2 = [
    ["Олексій", 0.9, 0.6, 0.5, 0.5, 1, 0.4, 0.5, 0.5, 0.8, 0.3],
    ["Антон", 0.8, 0.4, 0.2, 0.9, 0.6, 0.5, 0.8, 0.6, 1, 0.5],
    ["Валентин", 0.7, 0.8, 0.3, 0.5, 0.5, 1, 0.9, 0.7, 0.2, 0.9],
    ["Владислав", 0.9, 0.5, 0.8, 0.8, 0.7, 0.7, 0.5, 0.6, 0.5, 0.6],
    ["Сергій", 1, 0.6, 0.7, 0.4, 0.4, 0.8, 0.4, 0.5, 0.6, 0.8]
]
const character = [
    "Швидкість та гнучкість мислення", 
    "Вміння швидко приймати рішення", 
    "Cтійкість та концентрація уваги",
    "Зорова пам’ять", 
    "Швидкість реакції", 
    "Рухлива пам’ять", 
    "Фізична  виносливість", 
    "Координація рухів",
    "Емоційно-вольова стійкість", 
    "Відповідальність"
]
let res = [];
for(let i = 0; i < arr_1.length; i++) {
    for(let j = 0; j < arr_2.length; j++) {
        let tmp = [];
        for(let k = 1; k < arr_1[i].length && k < arr_2[j].length; k++) {
            tmp.push(Math.min(arr_1[i][k], arr_2[j][k]))
        }
        // res.push(`${arr_2[j][0]} - ${arr_1[i][0]}: ${maxValue(tmp)}`)
        res.push(maxValue(tmp));
    }
}

let res_2 = [];
for(let i = 0; i < arr_1.length; i++) {
    for(let j = 0; j < arr_2.length; j++) {
        let tmp = [];
        for(let k = 1; k < arr_1[i].length && k < arr_2[j].length; k++) {
            tmp.push(roundNumber(arr_1[i][k] * arr_2[j][k]))
        }
        // res_2.push(`${arr_2[j][0]} - ${arr_1[i][0]}: ${maxValue(tmp)}`)
        res_2.push(maxValue(tmp));
    }
}

createTable('prof_table')
createTable('cand_table')


function maxValue(arr = []) {
    var res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(res < arr[i]) {
            res = arr[i]
        }
    }

    return res;
}

function roundNumber(number) {
    return Math.round(parseFloat(number) * 100) / 100
}



function createTable(id_name) {
    var table = document.getElementById(id_name);

    let tmp_arr = []
    if(id_name === "prof_table") {
        tmp_arr = arr_1;
    } else {
        tmp_arr = arr_2;
    }

    var row = table.insertRow();
    for (let i = character.length - 1; i >= -1; i--) {
        if(i === -1) {
            var cell = row.insertCell(0);
            cell.innerHTML = "";
            continue
        }
        var cell = row.insertCell(0);
        cell.innerHTML = character[i];
    }

    for (let i = 0; i < tmp_arr.length; i++) {
        var row = table.insertRow();
        for(let j = tmp_arr[i].length - 1; j >= 0; j--) {
            var cell = row.insertCell(0);
            cell.innerHTML = tmp_arr[i][j];
        }
    }
}



// Отримуємо всі рядки таблиці
var rows_prof = document.querySelectorAll("#prof_table tr");
let selected_row_p = 0;

// Ітеруємося по рядках, починаючи з другого, оскільки перший містить заголовки стовпців
for (var i = 1; i < rows_prof.length; i++) {
  // Додаємо обробник події click до кожного рядка таблиці
  rows_prof[i].addEventListener("click", function() {

    //Створення форми (візуалізація її)
    makeVisual('button_prof_save', 'editForm_prof')

    // Отримуємо всі комірки поточного рядка
    var cells = this.querySelectorAll("td");
    selected_row_p = this;
    
    // Отримуємо дані з комірок поточного рядка
    var first_c = cells[0].textContent;
    var second_c = cells[1].textContent;
    var third_c = cells[2].textContent;
    var fourth_c = cells[3].textContent;
    var fifth_c = cells[4].textContent;
    var sixth_c = cells[5].textContent;
    var seven_th = cells[6].textContent;
    var eigth_c = cells[7].textContent;
    var ninth_c = cells[8].textContent;
    var ten_c = cells[9].textContent;
    var eleven_c = cells[10].textContent;

    // Змінюємо дані у формі на сторінці
    document.getElementById("first_c_prof").value = first_c;
    document.getElementById("second_c_prof").value = second_c;
    document.getElementById("third_c_prof").value = third_c;
    document.getElementById("fourth_c_prof").value = fourth_c;
    document.getElementById("fifth_c_prof").value = fifth_c;
    document.getElementById("sixth_c_prof").value = sixth_c;
    document.getElementById("seventh_c_prof").value = seven_th;
    document.getElementById("eigth_c_prof").value = eigth_c;
    document.getElementById("ninth_c_prof").value = ninth_c;
    document.getElementById("ten_c_prof").value = ten_c;
    document.getElementById("eleven_c_prof").value = eleven_c;
  });
}

function saveChanges_p(id_form) {
    document.getElementById(id_form).style.display = "none";
    const cells = selected_row_p.getElementsByTagName("td");
    let data = document.getElementById(id_form).querySelectorAll('input')
    for(let i = 0; i < data.length; i++) {
        cells[i].textContent = data[i].value
    }
}

// Отримуємо всі рядки таблиці
var rows_prof = document.querySelectorAll("#cand_table tr");
let selected_row_c = 0;

// Ітеруємося по рядках, починаючи з другого, оскільки перший містить заголовки стовпців
for (var i = 1; i < rows_prof.length; i++) {
  // Додаємо обробник події click до кожного рядка таблиці
  rows_prof[i].addEventListener("click", function() {

    //Створення форми (візуалізація її)
    makeVisual('button_cand_save', 'editForm_cand')

    // Отримуємо всі комірки поточного рядка
    var cells = this.querySelectorAll("td");
    selected_row_c = this
    
    // Отримуємо дані з комірок поточного рядка
    var first_c = cells[0].textContent;
    var second_c = cells[1].textContent;
    var third_c = cells[2].textContent;
    var fourth_c = cells[3].textContent;
    var fifth_c = cells[4].textContent;
    var sixth_c = cells[5].textContent;
    var seven_th = cells[6].textContent;
    var eigth_c = cells[7].textContent;
    var ninth_c = cells[8].textContent;
    var ten_c = cells[9].textContent;
    var eleven_c = cells[10].textContent;

    // Змінюємо дані у формі на сторінці
    document.getElementById("first_c_cand").value = first_c;
    document.getElementById("second_c_cand").value = second_c;
    document.getElementById("third_c_cand").value = third_c;
    document.getElementById("fourth_c_cand").value = fourth_c;
    document.getElementById("fifth_c_cand").value = fifth_c;
    document.getElementById("sixth_c_cand").value = sixth_c;
    document.getElementById("seventh_c_cand").value = seven_th;
    document.getElementById("eigth_c_cand").value = eigth_c;
    document.getElementById("ninth_c_cand").value = ninth_c;
    document.getElementById("ten_c_cand").value = ten_c;
    document.getElementById("eleven_c_cand").value = eleven_c;
  });
}

function saveChanges_c(id_form) {
    document.getElementById(id_form).style.display = "none";
    const cells = selected_row_c.getElementsByTagName("td");
    let data = document.getElementById(id_form).querySelectorAll('input')
    for(let i = 0; i < data.length; i++) {
        cells[i].textContent = data[i].value
    }
}

function makeVisual(...str) {
    for(let i = 0; i < str.length; i++) {
        var tmp = document.getElementById(`${str[i]}`);
        tmp.style.display = 'inline-block';
    }
}


function createTable_Res(id_name) {
    var table = document.getElementById(id_name);
    table.style.display = 'inline-block'

    makeVisual('h2_res', 'h2_res_2')

    let tmp_arr = []
    if(id_name === "max-min") {
        tmp_arr = res;
    } else {
        tmp_arr = res_2;
    }

    var row = table.insertRow();
    for (let i = arr_2.length - 1; i >= -1; i--) {
        if(i === -1) {
            var cell = row.insertCell(0);
            cell.innerHTML = "";
            continue
        }
        var cell = row.insertCell(0);
        cell.innerHTML = arr_2[i][0];
    }

    let k = 0;
    for (let i = 0; i < arr_1.length; i++, k++) {
        var row = table.insertRow();
        for(let j = arr_1.length - 1; j >= -1 ; j--) {
            if(j === -1) {
                var cell = row.insertCell(0);
                cell.innerHTML = arr_1[i][0];
                continue;
            }
            var cell = row.insertCell(0);
            cell.innerHTML = tmp_arr[k * arr_1.length + j];
        }
    }

    document.getElementById('fourthButton').style.display = 'block'
}

let arr_name = []
for(let i = 0; i < arr_2.length; i++) {
    arr_name.push(arr_2[i][0])
}
let marks_1 = [];
for (let i = 0, k = 0; i < arr_1.length; i++) {
    let tmp = [];
    for(let j = 0; j < arr_1.length; j++, k++) {
        tmp.push(res[k]);
    }
    marks_1.push(tmp);
}
let marks_2 = [];
for (let i = 0, k = 0; i < arr_1.length; i++) {
    let tmp = [];
    for(let j = 0; j < arr_1.length; j++, k++) {
        tmp.push(res_2[k]);
    }
    marks_2.push(tmp);
}

function buildHist(id_chart) {
    var ctx = document.getElementById(id_chart).getContext('2d');
    let marks;
    if(id_chart === "graf_max-min") {
        marks = marks_1;
    } else {
        marks = marks_2
    }
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: arr_name,
                datasets: [{
                    label: 'Менеджер',
                    data: marks[0],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Програміст',
                    data: marks[1],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Шофер',
                    data: marks[2],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Референт',
                    data: marks[3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                },
                {
                    label: 'Перекладач',
                    data: marks[4],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgb(153, 102, 255)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1 // встановлення максимального значення на осі Y
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
}