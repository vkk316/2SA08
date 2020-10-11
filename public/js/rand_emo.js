// Create by 6210110107

function generateRandomNumber() {
    var emo = ["😻","😹","🐱","🐾","😼","😿","😽","🙀","😸","😺","😾"]
    var rand = Math.floor(Math.random()* (10));
    document.getElementById('display').innerText = emo[rand]
  }