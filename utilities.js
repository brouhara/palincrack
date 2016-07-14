var array = [1, 2, 3, 4];

function max( array, callbackFn ) {
    var max = array[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return callbackFn(maxValue);
}

// max( [1,2,3], function(result) {
//     console.log(result);
// }

var test = function(result) {
    console.log(result);
}

max( [0, 1, 2, 3], callback);