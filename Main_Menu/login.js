var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snakegame-a973.restdb.io/rest/username",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "620fab4534fd6215658587dd",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    let score = [];
for(let i = 0; i<response.length; i++){
    
    score.push([response[i].score,response[i].username]);
    
}
score.sort((a,b) => b[0] - a [0]);
console.log(score);
for(let x = 0; x<score.length; x++){
    var table = document.getElementById("table");
    var row = table.insertRow(x+1);   
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = score[x][1];
    cell2.innerHTML = score[x][0];
}
  });