var currentPeriod = 1;
$(document).ready(function(){
    $(".row").hide();
    $("#p1").show();
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
});
