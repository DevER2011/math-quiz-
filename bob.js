player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innenrHTML = player1_name + " : ";
document.getElementById("player2_name").innenrHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_name + " : "+ player1_score;
document.getElementById("player2_score").innerHTML = player2_name + " : " +player2_score;
document.getElementById("player_question").innerHTML = "Question turn = " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn = " + player2_name;

function send(){
 number1 = document.getElementById("number1").value; 
 number2 = document.getElementById("number2").value; 

 answer = parseInt(number1) * parseInt(number2);
 question = "<4>" +number1 +"X" + number2 +"</h4>";

 document.getElementById("output").innerHTML = question;
 number1 = document.getElementById("number1").value =""; 
 number2 = document.getElementById("number2").value =""; 
}
question_turn = "player1";
answer_turn = "player2";

function check()    {
get_answer = document.getElementById("input_check_box").value;
if(get_answer == answer){
if(answer_turn == "player1"){
player1_score = player1_score+1;
document.getElementById("player1_score").innerHTML = player1_name + " : "+ player1_score;
}
else{
    player2_score = player2_score+1;
    document.getElementById("player2_score").innerHTML = player2_name + " : "+ player2_score;


}
}
if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("player2_name").innerHTML = "Question turn = " + player2_name; 
    }
    else{
        question_turn = "player1";
        document.getElementById("player1_name").innerHTML = "Question turn = " + player1_name; 
    
    
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player2_name").innerHTML = "Answer turn = " + player2_name; 
        }
        else{
            answer_turn = "player1";
            document.getElementById("player1_name").innerHTML = "Answer turn = " + player1_name; 
        
        
        }
}