/*Return the lowest index at which a value (second argument) should
be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.*/

function getIndexToIns(list, number) {
  try {
  	if(typeof list !== 'object'){
    	throw new ReferenceError("first arrgument must be array");
    } else if(list.length === 0) {
    	throw new SyntaxError("length of array is zero");
    }
  	
    list.push(number);    
    const array = list.sort((first, next) => first - next);
    return array.indexOf(number);
    
  } catch(err) {
  	console.log(err);
  }
}

console.log(getIndexToIns([20,3,5], 19));


/*Create a function: birthdayCakeCandles. It must return an integer
representing the number of candles she can blow out.
birthdayCakeCandles has the following parameter: arr - an array of
integers representing candle heights.*/

function birthdayCakeCandles(list) {
	try {
  	if(typeof list !== 'object'){
    	throw new ReferenceError("arrgument must be array");
    }
    return list.filter(item => item != 0).length;
  } catch(err) {
  	console.log(err);
  }
}

console.log(birthdayCakeCandles([10,20,44,38]));




/*Write a function that accepts an array of 10 integers (between 0
and 9), that returns a string of those numbers in the form of a phone
number.*/

function createPhoneNumber(list) {
    try {
  	if(typeof list !== 'object'){
    	throw new ReferenceError("arrgument must be array");
    } else if(list.length !== 10) {
    	throw new ReferenceError("array length must be 10");
    }
    
    list.map((res) => { 
    	if(res > 9) {
    		throw new SyntaxError("array element should be less than 10");
    	}
    })
    
    var format = list.join(''); 
    return '('+format.substring(0,3)+')'+format.substring(3,6)+'-'+format.substring(6);
    
  } catch(err) {
  	console.log(err);
  }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


/*
Lilly beautiful day example
*/

function reverseNumber(num) {
	return num.split('').reverse().join('');
}

function lillyBeautifulBirthday(list, k) {
	try {
  	 		if(typeof list !== 'object'){
  	      throw new SyntaxError("first arrgument must be array");
  	    } else if(list.length === 0) {
  	      throw new ReferenceError("array length must be 10");
  	    }  else if(typeof k !== 'number') {
        	throw new SyntaxError("second arrgument must be number");
        }
    var count = 0;
    for(var i = 0; i < list.length; i++) {
    	const number = list[i]+'';
      const diff = Math.abs(number - reverseNumber(number));
      if(diff % 2 === 0) {
      	console.log("it's her beautiful Day");
        count++;
      } else {
      	console.log("it's not her beautiful Day");
      }      
    }
    return count;
    
  } catch(err) {
  	console.log(err);
  }
}

console.log("Total number days are : "+ lillyBeautifulBirthday([22,14,18], 5));





