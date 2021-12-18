function getDataFromServer() {
    fetch('https://ab0b-76-91-41-187.ngrok.io/api')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        $("#testHeader").html($("#input-box").val())
    })
}

function getDataFromServer2() {
    fetch('https://ab0b-76-91-41-187.ngrok.io/api2')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log("working")
        $("#testHeader2").html($("#input-box2").val())
    })
}
