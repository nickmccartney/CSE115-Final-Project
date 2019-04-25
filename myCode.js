function get_aiport(){
  var originAiport = document.getElementById("airport").value;
  document.getElementById("airport").value = "";
  JSON.stringify(originAiport);
  //ajaxPostRequest("airport", originAiport ,displayFlights);
}

function get_destination(){
  var destination = document.getElementById("destination").value;
  document.getElementById("destination").value = "";
  JSON.stringify(destination);
  //ajaxPosttRequest("destination", destinationWeather,displayWeather);  //Fix me, must create function to displayWeather in "weather" div
}

function displayFlights(originAiport){

}

function displayWeather(destinationWeather){
  
}



function ajaxGetRequest(path, callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("GET", path);
    request.send();
}

function ajaxPostRequest(path, data, callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("POST", path);
    request.send(data);
}