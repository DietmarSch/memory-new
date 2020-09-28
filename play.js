let openCards=0;


const board=document.querySelector('#board');
// console.log(board);
board.addEventListener('click',function(e){
    let card1;
    let card2;
    let card;
    function clickedCard(){
        console.log(e.target);
        back=e.target;
        // back.classList.add('hidden');
        card=back.parentElement.parentElement;
        if (!(card.classList.contains('validCard'))||(card.classList.contains('visible'))){
            console.log("Invalid Card");
            return;
        };
        // console.log(card);
        card.classList.add('visible');
        console.log('Vorher: ',openCards);
        openCards++;
        console.log('Nachher: ',openCards);
        return card;
    }
    card=clickedCard();
    
    if (!card){
        console.log('Kartenwert Null');
        return
    }
    
    if (openCards===1){
        card1=card;
    } else if(openCards===2){
        card2=card;
    } else {
        console.log('Es sind schon zwei Karten gezogen', openCards);
    }
    console.log('openCards: ',openCards);
    

});