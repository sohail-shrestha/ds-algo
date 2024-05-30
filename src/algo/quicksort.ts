
type QuickSortType = (array: Array<number>) => Array<number>;

const quickSort: QuickSortType =  (array: Array<number>) => {
    if(array.length <= 1) return array
   
    const left: Array<number> = [];
    const right: Array<number> = []; 
   
    const pivotIndex = array.length -1
    const pivot = array[pivotIndex];
    
    for(let i = 0; i < pivotIndex; i ++ ){
        const element = array[i];
        if(element <= pivot){
            left.push(element);
        } else  {
            right.push(element)
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

export { quickSort };

