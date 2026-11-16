/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let L = 0;
    let R = height.length - 1;
    let Lmax = height[L];
    let Rmax = height[R];
    let rain = 0;

    while (L!=R) {
        if (height[L] < height[R]){
            L++;
            if (Lmax < height[L]) Lmax=height[L];
            else rain += Lmax-height[L];
        }
        else {
            R--;
            if (Rmax < height[R]) Rmax=height[R];
            else rain += Rmax-height[R];
        }
    }

    return rain;
};
