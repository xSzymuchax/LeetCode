/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj == null || obj == undefined) return false;
    if (classFunction == null || classFunction == undefined) return false; 

    if (typeof obj !== 'object') obj = Object(obj);
    if (typeof classFunction !== 'function') return false;

    return obj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
