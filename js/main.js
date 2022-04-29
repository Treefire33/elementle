publishClue();
var currentPeriod = 1;
var guessQueued = "NAVA";
$(document).ready(function(){
    $('.helpBackground').show();
    $('.helpBackground').click(function(){
        $('.helpBackground').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.helpBackground').hide();
    });
    $(".row").hide();
    $("#p1").show();
    $("#clues").text(currentClue);
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
            var img = new Image();
            img.src = "img/"+newIMG+".png";
            $("#guesses").append(img, " " ,newIMG);
        }
        guessQueued = "NAVA";
    });
});
