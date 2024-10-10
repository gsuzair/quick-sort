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
  if(leftSubarrayIsSmaller){
    quickSortHelper(array, startIndex, rightIndex - 1)
    quickSortHelper(array, rightIndex + 1, endIndex)
  } else {
    quickSortHelper(array, rightIndex + 1, endIndex)
    quickSortHelper(array, startIndex, rightIndex - 1)
  }
}

function swap(i, j, array){
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
