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

function getCategoryForWheel(location, term) {
    fetch('http://127.0.0.1:5000/getCats?l='+str(location)+"&t="+str(input2))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log("working")
        $("#testHeader2").html($("#input-box2").val())
    })
}

