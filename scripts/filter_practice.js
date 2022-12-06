function isOver60(arrayValue) {
    // if array values are greater than 60 display numbers over 60. else display no values over 60
    if (arrayValue > 60) {
        return true;
    }
    else {
        return false;
    }
}
// array values are passing through parameter
let numbers = [7, 9, 64, 60, 12, 13, 67, 66];
// filter returns an array containing numbers over 60=[64, 67, 66]
let allOver60 = numbers.filter(isOver60);
// if allover60 is greater than 0 display array. else display no values over 60
if (allOver60.length > 0) {
    // displays the array
    console.log(allOver60);
}
else {
    console.log("No values over 60");
}
