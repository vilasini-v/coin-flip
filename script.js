var num=Math.random()*100;
function heads(){
    if(num<=50){
        alert("CONGRATS, YOU BOTH CHOSE HEADS!!");
    }else{
        alert("computer has chosen tails, you've lost :(");
    }
    location.reload();
}
function tails(){
    if(num>50){
        alert("CONGRATS, YOU BOTH CHOSE TAILS!!");
    }else{
        alert("computer has chosen heads, you've lost :(");
    }
    location.reload();
}