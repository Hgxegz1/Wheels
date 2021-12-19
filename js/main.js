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
    let location = $('#location').val();
    console.log(location)
    /*fetch('https://ac4c-76-91-41-187.ngrok.io/getCats?l='+location+'&t=Food',
    {"method": "GET",
     "headers": {}})
        .then(response => response.json())
        .then(data => console.log(data)); */
}
