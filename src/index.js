
exports.min = function min (array) {
    if (!(Array.isArray(array)) || (array.length == 0)) {
        return 0;
    } else {
        return Math.min(...array);
    }
}

exports.max = function max (array) {
    if (!(Array.isArray(array)) || (array.length == 0)) {
        return 0;
    } else {
        return Math.max(...array);
    }
}

exports.avg = function avg (array) {
    if (!(Array.isArray(array)) || (array.length == 0)) {
        return 0;
    } else {
        let avg = 0;
        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        avg = avg / array.length;
        return avg; 
    }
}
