var arr = [1, 2, 3, 4, 5];
var counter = 0;
(function theLoop(arr, counter, len) {
    setTimeout(function () {
        console.log(arr[counter]);
        if (--len) {
            ++counter;
            theLoop(arr, counter, len);
        }
    }, 3000);
})(arr,counter, arr.length);
