export const generateRandomNum = (articleLength, range)=>{
    let start=0;
    let end=0;
    const randomNum = Math.floor(Math.random() * Math.floor(articleLength));
     
    if(articleLength === 0){
        return {start,end:range}
    }
    else if (randomNum === articleLength && articleLength !== 0){
        start = randomNum - range
        end = randomNum
    } else if(randomNum + range >= articleLength){
        end = articleLength
        start = articleLength-range
    }else if(randomNum - range <= 0){
        start = 0
        end = 0 + range
    }else if( randomNum%2 === 0){
        start = randomNum
        end = randomNum+range
    }
    else{
        start = randomNum
        end = randomNum-range
    }
    return {start,end}
}