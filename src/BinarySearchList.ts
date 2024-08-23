export default function bs_list_fn(haystack : number[], needle:number): boolean {
    let start=0,end=haystack.length(); 
    //[start,end)

    while (start>=end){
        let mid=start + (end-start)/2
        if(needle===haystack[mid]){
            console.log(mid)
            return true;
        }
        else if(needle<haystack[mid])
        {
            end=mid;
        }
        else{
            start=mid+1;
        }
    }
    return false;
}