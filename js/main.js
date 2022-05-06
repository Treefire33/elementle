publishClue();
var currentPeriod = 1;
var guessQueued = "NAVA";
var guesses = 0;
$(".row").hide();
$("#p1").show();
$("#clues").text(currentClue);
var points;
$(document).ready(function(){
    $("#beginGround").show();
    $("#winpopup").hide();
    $("#stats").hide();
    $("#losepopup").hide();
    $("#cosmeticsMenu").hide();
    $('.helpBackground').click(function(){
        $('.helpBackground').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.helpBackground').hide();
    });
    $('#winpopup').click(function(){
        resetGame();
    });
    $('#winpopup > .popupCloseButton').click(function(){
        resetGame();
    });
    $("#losepopup").click(function(){
        resetGame();
    });
    $("#losepopup > .popupCloseButton").click(function(){
        resetGame();
    });
    $("#statsBttn").click(function(){
        $("#stats").show();
    });
    $("#helpBttn").click(function(){
        $("#beginGround").show();                     
    });
    $("#cosmeticsBttn").click(function(){
        $("#cosmeticsMenu").show();
    });
    $(".shopIcon").click(function(){
        if($(this).attr('id') == "alkaliMetals" && points >== 20)
        {
            document.body.style.backgroundColor = "rgb(36,77,87)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 20 points");
        }
        
        if($(this).attr('id') == "alkaliEarthMetals" && points >== 40)
        {
            document.body.style.backgroundColor = "rgb(98,46,57)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 40 points");
        }
        
        if($(this).attr('id') == "transMetals" && points >== 60)
        {
            document.body.style.backgroundColor = "rgb(67,60,101)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 60 points");
        }
        
        if($(this).attr('id') == "unknown" && points >== 80)
        {
            document.body.style.backgroundColor = "rgb(70,71,76)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 80 points");
        }
        
        if($(this).attr('id') == "metals" && points >== 100)
        {
            document.body.style.backgroundColor = "rgb(47,77,71)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 100 points");
        }
        
        if($(this).attr('id') == "metalloids" && points >== 150)
        {
            document.body.style.backgroundColor = "rgb(82,62,27)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 150 points");
        }
        
        if($(this).attr('id') == "nonMetals" && points >== 200)
        {
            document.body.style.backgroundColor = "rgb(42,65,101)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 200 points");
        }
        
        if($(this).attr('id') == "nobleGases" && points >== 400)
        {
            document.body.style.backgroundColor = "rgb(98,56,66)";
        }
        else
        {
            alert("Not Enough Points! \n Requires 400 points");
        }
    });
    if(localStorage.points)
    {
        points = localStorage.getItem("points");
        $("#totalPointsEarned").text(points.toString() + " points");
    }
    else
    {
        points = "No";
    }
    if(localStorage.guessDistro)
    {
        $("#firstGuess").text(localStorage.guessDistro.split('/')[0]);
        $("#secondGuess").text(localStorage.guessDistro.split('/')[1]);
        $("#thirdGuess").text(localStorage.guessDistro.split('/')[2]);
        $("#forthGuess").text(localStorage.guessDistro.split('/')[3]);
        $("#fifthGuess").text(localStorage.guessDistro.split('/')[4]);
        $("#sixthGuess").text(localStorage.guessDistro.split('/')[5]);
    }
    else
    {
        $("#firstGuess").text("Coming Soon!");
    }
    $("#lbttn").click(function(){
        if(currentPeriod !== 1)
        {
            currentPeriod -= 1;
            $("#p"+currentPeriod.toString()).show();
            $("#p"+(currentPeriod+1).toString()).hide();
        }
    });
    $("#rbttn").click(function(){
        if(currentPeriod !== 9)
        {
            currentPeriod += 1;
            $("#p"+currentPeriod.toString()).show();
            $("#p"+(currentPeriod-1).toString()).hide();
        }
    });
    $(".elementButton").click(function(){
       var guessId = $(this).attr('id');
       guessQueued = guessId;
    });
    $("#enter").click(function(){
        if(guessQueued !== "NAVA")
        {
            if(guesses != 5)
            {
                let newIMG = getElementFromSymbol(guessQueued);
                var val = newIMG, src = 'http://raw.githubusercontent.com/Treefire33/elementle/main/img/' + val +'.png', img = document.createElement('img');
                img.src = src;
                $("#guesses").append('<div id="guess'+guesses+'"'+'>', img, "<br>" ,newIMG, "</div>", "<br>");
                var correctnessImage = checkCorrectness(newIMG);
                var val = correctnessImage;
                var src = 'http://raw.githubusercontent.com/Treefire33/elementle/main/img/' + val +'.png';
                var img = document.createElement('img');
                img.src = src;
                img.style.width = "75px";
                img.style.height = "75px";
                $("#guess"+guesses.toString()).append(img);
                guesses = guesses + 1;
                var correctness = checkCorrectness(newIMG);
                if(correctness == "check")
                {
                    $("#winpopup").show();
                    $("#guessesUsed").text(guesses + " guesses");
                    let points = calcPoints(guesses);
                    $("#pointsEarned").text(points + " points");
                    if(localStorage.points)
                    {
                        localStorage.points = Number(localStorage.points) + points;
                    }
                    else
                    {
                        localStorage.points = points;
                    }
                }
            }
            else
            {
                $("#losepopup").show();
                let points = 5;
                $("#correctAnswerText").text(currentAnswer);
                $("#pointsLost").text(points + " points");
                if(localStorage.points)
                {
                    localStorage.points = Number(localStorage.points) - points;
                }
                else
                {
                    localStorage.points = 0;
                }
                //
                if(localStorage.guessDistro)
                {
                    let guessesArray = [localStorage.guessDistro.split('/')[0],localStorage.guessDistro.split('/')[1],localStorage.guessDistro.split('/')[2],localStorage.guessDistro.split('/')[3],localStorage.guessDistro.split('/')[4],localStorage.guessDistro.split('/')[5]];
                    guessesArray[guesses-1] = (Number(guessesArray[guesses-1]) + 1).toString();
                    localStorage.guessDistro = guessesArray;
                }
                else
                {
                    localStorage.guessDistro = "0/0/0/0/0/0";
                }
            }
        }
        guessQueued = "NAVA";
    });
});

function checkCorrectness(answer)
{
    if(answer == currentAnswer)
    {
        return "check";
    }
    if(answer == currentCloseAnswer)
    {
        return "triangle";
    }
    if(answer != currentAnswer && answer != currentCloseAnswer)
    {
        return "cross";
    }
}

function calcPoints(gUS)
{
    if(gUS === 1)
    {
        return 10;
    }
    if(gUS === 2)
    {
        return 8;
    }
    if(gUS === 3)
    {
        return 6;
    }
    if(gUS === 4)
    {
        return 4;
    }
    if(gUS === 5)
    {
        return 2;
    }
    if(gUS === 6)
    {
        return 1;
    }
}

function resetGame()
{
    if(localStorage.points)
    {
        points = localStorage.getItem("points");
        $("#totalPointsEarned").text(points.toString() + " points");
    }
    else
    {
        points = "No";
    }
    if(localStorage.guessDistro)
    {
        $("#firstGuess").text(localStorage.guessDistro.split('/')[0]);
        $("#secondGuess").text(localStorage.guessDistro.split('/')[1]);
        $("#thirdGuess").text(localStorage.guessDistro.split('/')[2]);
        $("#forthGuess").text(localStorage.guessDistro.split('/')[3]);
        $("#fifthGuess").text(localStorage.guessDistro.split('/')[4]);
        $("#sixthGuess").text(localStorage.guessDistro.split('/')[5]);
    }
    else
    {
        $("#firstGuess").text("Coming Soon!");
    }
    publishClue();
    guesses = 0;
    $("#guesses").text("");
    $("#clues").text(currentClue);
}
