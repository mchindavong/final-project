$(document).ready(function() {    

    $( window ).on( "load", function() {
        var uuid=window.location.pathname;
        var uuid= uuid.toString();

        var citiesByUuid =["/9a5d03d6-6e04-49df-aaa3-0d1313b13676",
                   "/c24f71c6-90fb-4d81-b271-432cbe161b17",
                   "/921f0551-354a-4758-8823-33edac508687",
                   "/2758a3a3-b741-4f7b-bc46-0b3b79d2b793",
                   "/1feeacc3-b0e4-40dc-ad38-908aa14e1db4",
                   "/163318ea-5835-46b8-8b19-7c69807b1263"];
        var citiesByName = ["berlin","istanbul","moscow",
                            "prague","rome","warsaw"];
        var loc = citiesByUuid.indexOf(uuid);
        console.log(citiesByName[loc]);
        city = citiesByName[loc];

        if (city==='berlin'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/berlin",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }

        else if (city==='istanbul'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/istanbul",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }
        else if (city==='moscow'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/moscow",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }
        else if (city==='prague'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/prague",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }
        else if (city==='rome'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/rome",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }
        else if (city==='warsaw'){
            $.ajax({
                method: "PUT",
                url: "/api/agent/warsaw",
              })
              .done(function(response) {
                  if (response){
                      console.log(response);
                      alert("success! now keep searching");
                  }
                  else{
                      alert('err');
                  }
                //window.location.href = "/questions";
              });
        }
        else{
            console.log("p");
        }
            //in user session, load a new window when they scan a qr code
            function createQuestion() {
    
                var questionArray = {
                    username: "",
                    question: [],
                    correct_answer: []
                }
                var trivia = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean";
                $.get(trivia, function(data) {
                    //console.log(data.results);
                    data.results.forEach(function(element) {
                        questionArray.question.push(element.question);
                        questionArray.correct_answer.push(element.correct_answer);
                    });
                    //console.log(questionArray);
                    
                    var rando =Math.floor(Math.random(10)+1);
                    console.log(questionArray[rando]);
                    $.post("/api/questions", questionArray);
                });
            }
            createQuestion()
                // function getURL(){
                //     $.get("/api/questions/3965ff7a-ae3b-4576-815c-07a1600baad3")
                // }
                // qrURL as a parameter?
                //this function is called on london.html page load and this function
                //calls the api to get the question Object and display question in html
    
            $('#logo').addClass('animated fadeIn');
            $("input:text:visible:first").focus();
    
            $('#username').focus(function() {
                $('label[for="username"]').addClass('selected');
            });
            $('#username').blur(function() {
                $('label[for="username"]').removeClass('selected');
            });
            $('#password').focus(function() {
                $('label[for="password"]').addClass('selected');
            });
            $('#password').blur(function() {
                $('label[for="password"]').removeClass('selected');
            });
    
})
});