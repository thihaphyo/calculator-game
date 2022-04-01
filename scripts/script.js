var userScore = 0;
var attempts = 0;
var currentValidAnswer = 0;
var randomIndexArr = [];

function onClickStart() {

    document.getElementById("btnStart").setAttribute('class','btnStart inactive')
    document.getElementById("btnStart").disabled = true;

    document.getElementById("btnStop").setAttribute('class','btnStop active');
    document.getElementById("btnStop").disabled = false;

    quizGenerate();

}

function quizGenerate() {
    var questionNum1 = Math.floor((Math.random() * 99) + 1);
    var questionNum2 = Math.floor((Math.random() * 99) + 1);

    currentValidAnswer = questionNum1 + questionNum2;

    document.getElementById("num1").innerHTML = questionNum1 ;
    document.getElementById("num2").innerHTML = questionNum2 ;

    var answers = shuffle([Math.floor((Math.random() * 100) + 1),
         Math.floor((Math.random() * 100) + 1),
         currentValidAnswer]);

    getIndecies();

    console.log(randomIndexArr);

    for (var i =0; i< randomIndexArr.length; i++) {
        document.getElementById("answer"+(randomIndexArr[i])).innerHTML = answers[i];
        document.getElementById("answer"+(randomIndexArr[i])).disabled = false;
    }

    randomIndexArr = [];
}

function getIndecies() {
    for (var i = 0 ; i<3; i ++) {
        getIndex();
    }
}

function getIndex() {

    var index = Number( Math.floor((Math.random() * 3) + 1)) ;
    
    if (randomIndexArr.includes(index)) {
        getIndex();
    } else {
        randomIndexArr.push(index);
    }
    
}

function onClickStop() {
    document.getElementById("btnStop").setAttribute('class','btnStop inactive');
    document.getElementById("btnStop").disabled = true;

    document.getElementById("btnStart").setAttribute('class','btnStart active')
    document.getElementById("btnStart").disabled = false;

    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";

    document.getElementById("num1").innerHTML = "" ;
    document.getElementById("num2").innerHTML = "" ;

    randomIndexArr = [];
    currentValidAnswer = 0;
    attempts = 0;
    document.getElementById("time").innerHTML = attempts;
    document.getElementById("hstory_list").innerHTML += "<li>Your Socre is " + userScore + "</li>" ;
    userScore = 0;
    document.getElementById("score").innerHTML = userScore;
}

function onClickAnswer(obj) {
    var userAnswer = Number(obj.innerHTML);
    attempts+=1;
    document.getElementById("time").innerHTML = attempts;
    if (userAnswer == currentValidAnswer) {
        userScore+=10;
        document.getElementById("score").innerHTML = userScore;
    } else {
        userScore-=10;
        document.getElementById("score").innerHTML = userScore;
    }

    quizGenerate();
}

function shuffle(array) {
    var currentIndex = array.length
    var  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }