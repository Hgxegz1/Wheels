function sendRequest() {
    loc = localStorage.getItem('location')
    cho = $('#choice :selected').val()
    fetch('https://ac4c-76-91-41-187.ngrok.io/getCats?l='+loc+'&t='+cho,
    {"method": "GET",
     "headers": {}})
        .then(response => response.json())
        .then(data => localStorage.setItem('data', data))
        .then(() => window.location = '/options.html')
}

function setLocation() {
    localStorage.setItem('location', $('#location').val());
}

function getLocation() {
    return localStorage.getItem('location');
}

function setChoice() {
    localStorage.setItem('choice', $('#choice :selected').val())
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
