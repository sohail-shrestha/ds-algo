import { swap } from "utils/array-swap";

const quickSort = (array: Array<number>): Array<number> => {
    if(array.length <=1) return array;

    let swapMarker = -1;
    const pivot = array[array.length-1]

    for(let i=0; i < array.length - 1; i++){
        if(array[i] < pivot){
            swapMarker++
            swap(array, i, swapMarker);
        } 
    }
    
    const left = quickSort(array.slice(0, swapMarker+1));
    const right = quickSort(array.slice(swapMarker+1, array.length -1))

    return [...left, pivot, ...right];
}

export { quickSort };
