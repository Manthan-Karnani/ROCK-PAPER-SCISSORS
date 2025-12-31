let score={
    win:0,
    lose:0,
    tie:0
};

let resultCheck='';
let computerMove='';

function compMove(){
    let randomNumber=Math.random();
    if(randomNumber>=0 && randomNumber<1/3)
        return 'rock';
    else if(randomNumber>=1/3 && randomNumber<2/3)
        return 'paper';
    else 
        return 'scissors';
}

function resultCalculate(human,computer){
    if(human=='rock')
    {
        if(computer=='rock')
            return 'tie';
        else if(computer=='paper')
            return 'lose';
        else 
            return 'win'
    }

    else if(human=='paper')
    {
        if(computer=='rock')
            return 'win';
        else if(computer=='paper')
            return 'tie';
        else 
            return 'lose';
    }

    else 
    {
        if(computer=='rock')
            return 'lose';
        else if(computer=='paper')
            return 'win';
        return 'tie';
    }
    
}

function scoreUpdate(){
    if(resultCheck=='win')
        score.win+=1;
    else if(resultCheck=='lose')
        score.lose+=1;
    else 
        score.tie+=1;
    displayScore();

    
        

    
}

function displayScore(){
    document.querySelector('.score').innerHTML=`WINS: ${score.win}    LOSS: ${score.lose}    TIES: ${score.tie}`;
}

function messageUpdate(human){
    document.querySelector('.result').innerHTML=`You :${human}. Computer: ${computerMove}. You ${resultCheck} `;

}

function imageUpdater(human){
    if(human=='rock')
        document.querySelector('#humanSide').innerHTML='<img src="rock.jpeg" alt="">';
    else if(human=='paper')
        document.querySelector('#humanSide').innerHTML='<img src="paper.jpeg" alt="">';
    else 
        document.querySelector('#humanSide').innerHTML='<img src="scissor.jpeg" alt="">';
      
    if(computerMove=='rock')
        document.querySelector('#computerSide').innerHTML='<img src="rock.jpeg" alt="">';
    else if(computerMove=='paper')
        document.querySelector('#computerSide').innerHTML='<img src="paper.jpeg" alt="">';
    else 
        document.querySelector('#computerSide').innerHTML='<img src="scissor.jpeg" alt="">';


}





