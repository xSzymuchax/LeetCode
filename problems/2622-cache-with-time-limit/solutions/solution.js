var TimeLimitedCache = function() {
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (!Object.hasOwn(this, 'dataSet')) 
        this.dataSet = new Map();

    const keyExist = this.dataSet.has(key) && this.dataSet.get(key)[1] > Date.now();
    this.dataSet.set(key, [value, Date.now() + duration]);
    return keyExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (!Object.hasOwn(this, 'dataSet')) return -1;
    if (this.dataSet.has(key)) {
        let vd = this.dataSet.get(key);
        if (vd[1] > Date.now())
            return vd[0];
        else
            return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    if (!Object.hasOwn(this, 'dataSet')) return 0;

    let count = 0;
    let t = Date.now();
    for (const [k, v] of this.dataSet){
        if (v[1] > t) count++;
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
