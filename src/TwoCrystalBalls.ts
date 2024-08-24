export default function two_crystal_balls(breaks: boolean[]){
    const sqrtN=Math.floor(Math.sqrt(breaks.length));
    //we jump maximum sqrt N times as Sqrt N × SqrtN =
    for (let i=sqrtN;i <N;i+=sqrtN) 
    {
        if (breaks[i]==1)
        {
            break;
        }
    }

    // I need the first 1 pos , no matter how i search for it
    // 1 way is jump a sqrtN back and now start checking from there
    //another js start from current position and go back untill u
    // find a zero and retur index+1

    let startRange=i-sqrtN; ź
    for(j=startRange; j<i;j++)
    {
        if (breaks[j]==1)
            return j;
    }
    return -1;
}v