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
        for(j=0;j<newArr.length-1;j++) {
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
        
        newArray[j][2]="img"+i;
        j++;
        newArray[j][2]="img"+i;
        j++;
    }
    return newArray;
}

function createMasterArray{
    const initArray=createShuffleArr();
        console.log({initArray});
    const shuffledArray = sortArrayByIndex(initArray,1);   //Sortieren nach Zufallszahl
        console.log({shuffledArray});
    const imgShuffledArray = setImages(shuffledArray);
        console.log({imgShuffledArray})
    const masterArr= sortArrayByIndex(imgShuffledArray,0);   //Ursprüngliche Sortierung 
        console.log({masterArr});
    return masterArr;
}

function createBoard(){
    // for(let i=0; i<numRows;i++){
    //     for(let j=0; j<numColumns;j++){
            
    //     }
    // }
    const masterArray=createMasterArray();
}  
    
createBoard();
    
    




