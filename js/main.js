publishClue();
var currentPeriod = 1;
var guessQueued = "NAVA";
$(".row").hide();
$("#p1").show();
$("#clues").text(currentClue);
$('.helpBackground').show();
var guesses = 1;
$(document).ready(function(){
    $('.helpBackground').click(function(){
        $('.helpBackground').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.helpBackground').hide();
    });
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
            if(guesses != 7)
            {
                let newIMG = getElementFromSymbol(guessQueued);
                var val = newIMG, src = 'http://raw.githubusercontent.com/Treefire33/elementle/main/img/' + val +'.png', img = document.createElement('img');
                img.src = src;
                $("#guesses").append('<div id="guess'+guesses+'"'+'>', img, "<br>" ,newIMG, "</div>", "<br>");
                var correctnessImage = checkCorrectness(newIMG);
                var val = correctnessImage, src = 'http://raw.githubusercontent.com/Treefire33/elementle/main/img/' + val +'.png', img = document.createElement('img');
                img.src = src;
                $("#guess"+guesses).append(img);
                guesses = guesses + 1;
            }
            else
            {
                alert("Cannot guess anymore!");
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
    else if(answer == currentCloseAnswer)
    {
        return "triangle";
    }
    else
    {
        return "cross";
    }
}
