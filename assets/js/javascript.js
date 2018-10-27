$(document).ready(function() {
    var answerU= [];
   
    var batman = [
        {
        question: "What is the name of batman's best super power?",
        choise:["Laser Beam","Ice Vision","No Powers"],
        image:[],
        correctAnswer: "No Powers"
    },
    {
        question: "What is batmans go to crutch?",
        choise:["Utility Belt","Robin","His Butler"],
        image:[], 
        correctAnswer: "Utility Belt"
    },
    {
        question: "What makes batman special?",
        choise:["Nothing","Adaptation","Orphans"],
        image:[], 
        correctAnswer: "Nothing"
    },
    {
        question: "what can take batman out?",
        choise:["Gun","Knife","Both"],
        image:[], 
        correctAnswer: "Both"
    },
    {
        question: "In what circumstance would batman be able to fight amongst super heros?",
        choise:["with other hero's","More gadgets","Never"],
        image:[], 
        correctAnswer: "Never"
    }
];
       
     for (var x = 0 ; x <batman.length; x++)  
     {
        var questionDiv = $("<div>");
        questionDiv.html(batman[x].question)
        console.log(batman[x].question)
        console.log(questionDiv)
        $("#questions").append(questionDiv);   
        for (var i = 0; i < 3; i++) 
             {
                
                var answerBtn = $("<button>");
                answerBtn.addClass("answer-button-color answer-button");
                answerBtn.val(batman[x].choise[i]);
                answerBtn.text(batman[x].choise[i]);
                $("#questions").append(answerBtn);   
                 
             }
        
    }
                var i = 0;
                $(".answer-button").on("click", function() {
                answerU.push(($(this).val()));
                console.log(i);
                    if (batman[i].correctAnswer == answerU[i])
                    {
                        $("#answer").html( "Correct");
                        i=i+1;
                    }
                    else{
                        $("#answer").html("WRONG: " + batman[i].correctAnswer);
                        i=i+1;
                    }
                   
                
            });
                
});
    
   
