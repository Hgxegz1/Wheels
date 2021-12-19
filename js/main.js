function getDataFromServer() {
    fetch('https://ac4c-76-91-41-187.ngrok.io/api')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        $("#testHeader").html($("#input-box").val())
    })
}

function getDataFromServer2() {
    fetch('https://ac4c-76-91-41-187.ngrok.io/api2')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log("working")
        $("#testHeader2").html($("#input-box2").val())
    })
}

function sendRequest() {
    setChoice()
    loc = localStorage.getItem('location')
    cho = localStorage.getItem('choice')
    fetch('https://ac4c-76-91-41-187.ngrok.io/getCats?l='+loc+'&t='+cho,
    {"method": "GET",
     "headers": {}})
        .then(response => response.json())
        .then(data => localStorage.setItem('data', data))
    alert("We are done with the request")
}

function setLocation() {
    localStorage.setItem('location', $('#location').val());
}

function getLocation() {
    return localStorage.getItem('location');
}

function setChoice() {
    localStorage.setItem('choice', $('#dropdown :selected').val());
}

function getChoice() {
    return localStorage.getItem('choice');
}

function setCategory(cat) {
    localStorage.setItem('category', cat);
}

function getCategory() {
    return localStorage.getItem('category');
}

function getData() {
    values = localStorage.getItem('data')
    var valArray= values.split(',');
    for(let i = 0; i < valArray.length; i++) {
        document.getElementById(i.toString()).innerHTML = valArray[i]
    }
}
