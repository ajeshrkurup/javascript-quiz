function submitAnswer() {
    
    var totalQuest = 5; //total no:of questions
    var countAnswers = 0; // total no:of correct answer
    var correctAns = [ "b", "c", "b", "c", "b"];
    
    
    //Get User Input
    
    var selectedAns = [];
    var c = 0;
    for(var i=0; i<totalQuest; i++) {
        c++;
        var q = "q"+c;  //for selecting the input element, using its name 
        selectedAns[i] = document.forms["quizForm"][q].value;
                
    }
    
       var d = 0;

    for(var i=0; i<totalQuest; i++) {
        
        if(selectedAns[i] === "") {
            d = i+1;
            alert("Please select answer for Question No: " + d);
            return false;
        }
        
        else {
            
            if(selectedAns[i] === correctAns[i]) {
                
                countAnswers++;
            }             
               
    }    
}
    
    document.getElementById("result").innerHTML = "Here is your result, you scored " + countAnswers + "/" + totalQuest;
}


