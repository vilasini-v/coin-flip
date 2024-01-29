const score={
    wins: 0,
    loses: 0
};
function heads(){
    var num=Math.random()*100;
    if(num<=50){
        score.wins++;
        document.getElementById('message').innerHTML = `You picked heads, computer picked heads, you won`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses}`;

    }else{
        score.loses++;
        document.getElementById('message').innerHTML = `You picked heads, computer picked tails, you lost`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses}`;

    }
}
function tails(){
    var num=Math.random()*100;
    if(num>50){
        score.wins++;
        document.getElementById('message').innerHTML = `You picked tails, computer picked tails, you won`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses}`;

        // alert('You picked tails, computer picked tails, you won \nWins: ' + score.wins + ' Losses: ' + score.loses);
    }else{
        score.loses++;
        document.getElementById('message').innerHTML = `You picked tails, computer picked heads, you lost`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses}`;
        // alert('You picked tails, computer picked heads, you lost \nWins: ' + score.wins + ' Losses: ' + score.loses);
    }
}

function reset(){
    score.wins = 0;
    score.loses = 0;
    document.getElementById('message').innerHTML = `Score has been reset`;
    document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses}`;
}

