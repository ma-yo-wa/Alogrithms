function bubbleSort(array) {
	for (i=0; i<array.length; i++) {
    for (j=0; j<array.length; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}