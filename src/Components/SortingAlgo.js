export const getMergeSortAnimation = (array) =>{
    const animation = [];
    if(array.length <= 1){
        return array;
    }

    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length-1,auxiliaryArray,animation);
    return animation;
}

const mergeSortHelper = (array, startIndex, endIndex, auxiliaryArray, animation) =>{

    if(startIndex === endIndex) return;

    const middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);

    mergeSortHelper(array, startIndex, middleIndex, auxiliaryArray, animation);
    mergeSortHelper(array, middleIndex + 1, endIndex, auxiliaryArray, animation);
    doMerge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animation);

}

const doMerge = (array, startIndex, middleIndex, endIndex, auxiliaryArray, animation) =>{
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex){
        animation.push([i,j]);
        animation.push([i,j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animation.push([k, auxiliaryArray[i]])
            array[k++] = auxiliaryArray[i++];
        }
        else{
            animation.push([k,auxiliaryArray[j]]);
            array[k++] = auxiliaryArray[j++];
        }

    }

    while( i <= middleIndex){
        animation.push([k,auxiliaryArray[i]]);
        array[k++] = auxiliaryArray[i++];
    }
    while(j<=endIndex) {
        animation.push([j,j])
        animation.push([j,j])

        animation.push([k, auxiliaryArray[j]]);
        array[k++] = auxiliaryArray[j++];
    }
}