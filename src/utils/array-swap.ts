type Swap = <T>(array: Array<T>, i: number, j: number) => Array<T>

const validate = <T>(array: Array<T>, i: number, j: number) => {
    if(array.length <2) throw new Error("Array length must be greater than 2.")
    if(i > array.length || j > array.length) throw new Error("Index out of bounds.")    
}

const swap: Swap = <T>(array: Array<T>, i: number, j: number) => {
    validate(array, i, j)
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

export { swap }

