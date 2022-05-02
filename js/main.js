publishClue();
var currentPeriod = 1;
var guessQueued = "NAVA";
$(".row").hide();
$("#p1").show();
$("#clues").text(currentClue);
$('.helpBackground').show();
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
            let newIMG = getElementFromSymbol(guessQueued);
            var val = newIMG, src = 'http://raw.githubusercontent.com/Treefire33/elementle/main/img/' + val +'.png', img = document.createElement('img');
            img.src = src;
            $("#guesses").append(img, "<br>" ,newIMG, "<br>");
        }
        guessQueued = "NAVA";
    });
});
