function iterativeLog(array){
	for (var i in array) {
  	console.log(i+": "+array[i])
	}
}

function iterate(callback){
	arr = ["a", "b", "c"]
	arr.forEach(callback)
	return arr
}

function doToArray(array, callback){
	array.forEach(callback)
	return array
}