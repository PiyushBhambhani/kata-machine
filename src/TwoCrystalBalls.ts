export default function two_crystal_balls(breaks: boolean[]){
    const N= breaks.length;
    const sqrtN=Math.floor(Math.sqrt(breaks.length));
    //we jump maximum sqrt N times as Sqrt N × SqrtN =
    let i=sqrtN;
    for (;i <N;i+=sqrtN) 
    {
        if (breaks[i]==true)
        {
            break;
        }
    }

    // I need the first 1 pos , no matter how i search for it
    // 1 way is jump a sqrtN back and now start checking from there
    //another js start from current position and go back untill u
    // find a zero and retur index+1


    let startRange=i-sqrtN; 

    //for(;i>startRange;i--){
       // if(breaks [i]==false && i + 1 <N  )
        //{
           // return i+1;
        //}
    //}

    for(let j=startRange; j<i;j++)
    {
        if (breaks[j]==true)
           return j;
    }


    return -1;
}