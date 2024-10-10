function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

function quickSortHelper(array, startIndex, endIndex){
  if(startIndex >= endIndex) return;
  const pivotIndex = startIndex
  let leftIndex = startIndex + 1
  let rightIndex = endIndex
  while(leftIndex <= rightIndex){
    if(array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]){
      swap(leftIndex, rightIndex, array)
    }
    if(array[leftIndex] <= array[pivotIndex]) leftIndex++
    if(array[rightIndex] >= array[pivotIndex]) rightIndex--
  }
  swap(pivotIndex, rightIndex, array)
  const leftSubarrayIsSmaller = rightIndex - 1 - startIndex < endIndex - (rightIndex + 1)
  //rightIndex - 1 - startIndex: This calculates the size of the left subarray. 
  //It determines how many elements are between the startIndex and rightIndex - 1
  //which represents the left side of the pivot.
  //endIndex - (rightIndex + 1): This calculates the size of the right subarray. 
  //It determines how many elements are between the rightIndex + 1 and endIndex
  //which represents the right side of the pivot.
  if(leftSubarrayIsSmaller){
    quickSortHelper(array, startIndex, rightIndex - 1); // Sort the left subarray
    quickSortHelper(array, rightIndex + 1, endIndex);   // Then sort the right subarray
  } else {
    quickSortHelper(array, rightIndex + 1, endIndex);   // Sort the right subarray
    quickSortHelper(array, startIndex, rightIndex - 1); // Then sort the left subarray
  }
}

function swap(i, j, array){
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

// Do not edit the line below.
exports.quickSort = quickSort;
