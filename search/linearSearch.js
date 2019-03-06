function linearSearch(array, value) {
	for (i=0; i<array.length; i++){
		if (array[i] === value) {
			return i;
		}
	}
	return -1
}