/***
 * 
 *  Think Big-O Notation
 * 
 *  */

var array = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

function lowercase(string) {
    return string.toLowerCase();
}

function noSpace(string) {
    return string.replace(/ /g, '');;
}

function isOnly(string) {
    return string.replace(/[^A-Za-z]/g, '');
}

function isArray(string) {
    return string.split('');
}

function formatString(string) {

    string = String(string);
    console.log("CONVERT : " + string);

    string = lowercase(string);
    console.log("lowercase: " + string);

    string = noSpace(string);
    console.log("noSpace: " + string);

    string = isOnly(string);
    console.log("isOnly: " + string);

    string = isArray(string);
    console.log("isArray: " + string);

    return string;
}

function getFloor(array, number) {
    if (typeof number === 'number') {
        return Math.floor( array.length / number );
    }
    return Math.floor(array.length / 2);
}

function sliceFirst(array, number) {
    return array.slice(0, getFloor(array));
}

function sliceLast(array, number) {
    return array.slice(-(getFloor(array)));
}


function compare4(array, number) {
    var start = array.slice(0, number).toString();
    var end = array.slice(-number).reverse().toString();
    
    console.log('Array: ' + array);
    console.log('Number: ' + number);
    console.log(start);
    console.log(end);
    
    array = array.slice(number, array.length - number);

    if ( start === end ) {
        console.log('Match');

        if ( array.length >= (number * 2) ) {
            compare4(array, number);
        } else if ( array.length >= 2 && number >= 2){
            compare4(array, number / 2);
        }
    } else {
        return false;
    }

    return true;
}

function compare3(array) {

    var start = sliceFirst(array);
    var end = sliceLast(array);

    end.reverse();

    if (start === end) {
        return true;
    }
}

function compare2(array) {
    var char1 = array.shift();
    var char2 = array.pop();

    if (char1 !== char2) {
        return false;
    } else if (array.length > 2) {
        compare2(array);
    }
    return true;
}

function compare1(array) {
    var half = getFloor(array);
    var x = array.length - 1;

    console.log(array.length + " " + half + " " + x);

    for (var i = 0; i < half; i++) {

        console.log(array[i] + " " + array[x - i]);

        if (array[i] !== array[x - i]) {
            return false;
        }
    }

    return true;
}


function compare(array) {

    console.log('COMPARE 1');
    var arrayCopy = array.slice();
    console.log( compare1( arrayCopy ) );

    console.log('COMPARE 2');
    var arrayCopy = array.slice();
    console.log( compare2( arrayCopy ) );

    console.log('COMPARE 3');
    var arrayCopy = array.slice();
    console.log( compare3( arrayCopy ) );

    console.log('COMPARE 4');
    var arrayCopy = array.slice();
    console.log( compare4(arrayCopy, 2) );

    console.log('COMPARE 5');
    var arrayCopy = array.slice();
    console.log( compare4(arrayCopy, 4) );

    return compare1( arrayCopy );
}

function format(string, index) {
    string = formatString(string);
    string = compare(string);
    array[index] = string;
}

array.map(format);

console.log(array);