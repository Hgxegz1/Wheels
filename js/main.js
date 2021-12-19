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

function getLocation() {
    localStorage.setItem('location', $('#location').val())
}

function getActivity() {
    localStorage.setItem('activity', $('#activity :selected').text())
}

function sendRequest() {
    getActivity()
    loc = localStorage.getItem('location')
    act = localStorage.getItem('activity')
    fetch('https://ac4c-76-91-41-187.ngrok.io/getCats?l='+loc+'&t='+act,
    {"method": "GET",
     "headers": {}})
        .then(response => response.json())
        .then(data => localStorage.setItem('data', data))
}

function getData() {
    values = localStorage.getItem('data')
    console.log(localStorage.getItem('data'))
}