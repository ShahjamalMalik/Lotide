const assertEqual = function(actual, expected) {

	if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 


	for (var i = 0; i < actual.length; i++) {
		if (actual[i] !== expected[i]) {
      break
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      
    } 
	}


	console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 3);
assertEqual("Lighthouse Labs", "lighthouse labs");