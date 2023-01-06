const array = [1, 2, 3, 4, 5, 6, 7];

removeElement = function(array,item) {
    let element = 2;
    for (element in array) {
        if (array[element] === item) {
            array.splice(element, 1);
            break;
            }
        }
        return array;
};

removeElement(array, 2);

console.log(array.join())