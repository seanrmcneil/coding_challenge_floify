function validateForm(numbersArray) {
	numbersArray = numbersArray.trim()
	if (numbersArray == ""){
		alert("Invalid input. Please enter something");
    	return;
	}
    numbersArray = numbersArray.split(/[ ,]+/); //splits on a sequence of one or more commas or spaces
    numbersArray = numbersArray.map(x => Number(x)).sort(sortNumberic).reverse();
    if (numbersArray.some(x => !Number.isInteger(x))){
    	alert("Invalid input");
    	return;
    }

    addElements(numbersArray);
}

function addElements(numbersArray){
	for (let i in numbersArray) {
    	let newElement = document.createElement('div');
    	if (i % 2 == 0){
    		newElement.className = "even";
    	}
    	newElement.innerHTML = numbersArray[i];
    	document.getElementById("displayNumbers").appendChild(newElement);
	} 
}

function sortNumberic(a,b) {
    return a - b;
}