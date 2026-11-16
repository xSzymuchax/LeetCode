function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length-1;
    let maxArea=-1;

    while (l!=r){
        let minH = Math.min(height[l], height[r]);
        let currentArea = minH*(r-l);
        if (maxArea < currentArea){
            maxArea = currentArea;
        }

        if (height[l] < height[r]) l++;
        else r--;
    }

    return maxArea;
};
