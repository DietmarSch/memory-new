const numColumns=5;
const numRows=5;

const numCards=numColumns*numRows-1;

function createShuffleArr(){
   const outer=[];
    for (let i=1;i<=numCards;i++){
        let inner=[i,Math.random(),''];
        outer.push(inner);
    }
    // console.log({outer});
    return outer;
}

function sortArrayByIndex (tempArr,intInd) {   // Array und Index
    // const newArr = tempArr.slice();
    // const newArr=[...tempArr];
    newArr=JSON.parse(JSON.stringify(tempArr));
    let modified=true;
    while (modified){
        modified=false;
        for(let j=0;j<newArr.length-1;j++) {
            let arrClb=[];
            
            if (newArr[j][intInd] > newArr[(j+1)][intInd]) {
                arrClb=newArr[j];
                newArr[j]=newArr[j+1];
                newArr[j+1]=arrClb;
                modified=true;
            }
        }
    }
    return newArr;
}



function setImages(tempArray){
    // const newArray=tempArray.slice();
    // const newArray=[...tempArray];
    const newArray=JSON.parse(JSON.stringify(tempArray));
    let j=0;
    for (let i=1; i<=(numCards/2); i++){
        
        newArray[j][2]="img"+i;   //Jeweils 2 Felder bekommen das gleiche Bild
        j++;
        newArray[j][2]="img"+i;
        j++;
    }
    return newArray;
}

function createMasterArray(){
    //Detailliert===========================================================================================
    
    // const initArray=createShuffleArr();
    //     console.log({initArray});
    // const shuffledArray = sortArrayByIndex(initArray,1);   //Sortieren nach Zufallszahl
    //     console.log({shuffledArray});
    // const imgShuffledArray = setImages(shuffledArray);
    //     console.log({imgShuffledArray})
    // const masterArr= sortArrayByIndex(imgShuffledArray,0);   //Ursprüngliche Sortierung 
    //     console.log({masterArr});
    // return masterArr;
    //======================================================================================================
    // const masterArr=sortArrayByIndex(setImages(sortArrayByIndex(createShuffleArr(),1)),0);
    // console.log({masterArr});
    // return masterArr
    //=======================================================================================================
    return sortArrayByIndex( setImages( sortArrayByIndex( createShuffleArr() ,1) ) ,0);
}

function createSub(type,id,className,dataKey,dataValue,innerText){
    //values: {id,classname}
    const sub = document.createElement(type);
    if(id){sub.id=id;}
    if(className){sub.className=className;}
    if(dataKey && dataValue){sub.setAttribute(dataKey,dataValue)};
    if(innerText){sub.innerText=innerText};
        // console.log('sub.dataset.img: ',sub.dataset.img);
        // console.log({sub});
    return sub;
}
function createSubDiv(id,className,dataKey,dataValue,innerText){
   return createSub('div',id,className,dataKey,dataValue,innerText);
}


function createBoard(){
    
    const masterArray=createMasterArray();
    const board = document.querySelector('#board');
    // console.log({board});
    
    // board.append(createSubDiv('Dietmar','Superklasse Megaklasse Klasse', 'data-img','img345'));
    
    // board.append(createSub('div','Bernhard','Superklasse Megaklasse Klasse'));
    // board.append(createSub('div','','Superklasse Megaklasse Klasse'));
    // board.append(createSub('div','OhneDataImg','','','data-img'));
    // board.append(createSub('div','','','data-img','img787'));
    // board.append(createSub('div'));
    
    
    let k=0;    //Zählvariable für das Auslesen des masterArray
    let l=0;    //Zählvariable für die Anzahl der Felder
    for(let i=0; i<numRows;i++){
        const rowDiv = createSubDiv('','row');
        for(let j=0; j<numColumns;j++){
            // const cardDiv = document.createElement('div');
            let cardDiv;
            let innerBox;
            if (l===numCards/2){
                cardDiv=(createSubDiv('score', 'card'));
                    innerBox=createSubDiv();
                    cardDiv.append(innerBox);               // cardDiv.id="score";
                l++;
            } else {
                cardDiv=createSub('div',masterArray[k][0],"card validCard covered","data-img",masterArray[k][2]);
                    innerBox=createSubDiv('','innerBox');
                        let front=createSubDiv('',('front '+masterArray[k][2]))
                        let back=createSubDiv('','back');
                    innerBox.append(front,back);
                cardDiv.append(innerBox);
                // cardDiv.id=masterArray[k][0];
                // cardDiv.classList.add(masterArray[k][2]); 
                k++;  
                l++;  
            }
            rowDiv.append(cardDiv);
            // console.log(i,j);
        }
        board.append(rowDiv);
    }
}  
    
createBoard();
console.log('Spiel geladen');   
    




