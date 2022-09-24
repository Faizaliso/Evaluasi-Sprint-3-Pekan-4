//==|01|==
function ganjilGenap(array) {
    let ganjil = []
    let genap = []

    for (index in array) {
        if (array[index] % 2 == 0) {
            genap.push(array[index])
        } else {
            ganjil.push(array[index])
        }
    } return ([ganjil, genap])
}

//==|02|==
function highNutrition() {
    fetch(`https://www.fruityvice.com/api/fruit/all`)
        .then(respons => respons.json())
        .then(respons => console.log(respons))
}


//==|03|==
let state = {
    // token: respons.token
    token: ""
}

function registerUser() {

    const data = {
        name: prompt("Masukan nama anda"),
        email: prompt("email anda"),
        password: prompt("password anda"),
        age: prompt('umur anda')

    }
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(`https://api-nodejs-todolist.herokuapp.com/user/register`, init)
        .then(respons => respons.json())
        .then(respons => {
            console.log(respons)
            state.token = respons.token
        })
        .catch(error => console.error(error))
}

function login() {
    const data = {
        email: prompt("email anda"),
        password: prompt("password anda"),
    }

    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/user/login`, init)
        .then(respons => respons.json())
        .then(respons => {
            console.log(respons)
            state.token = respons.token
        })
        .catch(error => console.error(error))
}

function addTask() {
    const data = {
        description: prompt("add task here")
    }

    const init = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task`, init)
        .then(respons => respons.json())
        .then(respons => console.log(respons))
        .catch(error => console.error(error))
}

function getAllTask() {
    const init = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task`, init)
        .then(respons => respons.json())
        .then(respons => console.log(respons))
        .catch(error => console.error(error))
}

function deleteTask(id) {
    const init = {
        method: 'delete',
        headers: {
            "Authorization": `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
        .then(respon => respon.json())
        .then(respon => console.log(respon))
        .catch(error => console.error(error))
}

function getTaskbyID(id) {
    const init = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        }
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
        .then(respon => respon.json())
        .then(respon => console.log(respon))
        .catch(error => console.error(error))
}

function updateTaskbyID(id) {
    const data = {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${state.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "completed": true
        })
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, data)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error(error));
}