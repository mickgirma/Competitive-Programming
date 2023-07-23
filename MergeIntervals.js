var merge = function(intervals) {
    intervals.sort((s,e) => s[0] - e[0]);

    const merged = [];
    merged.push(intervals[0]);

    for(let i = 1; i < intervals.length; i++) {
        const currentStart = intervals[i][0];
        const currentEnd = intervals[i][1];
        const lastEnd = merged[merged.length - 1][1];

        if (currentStart <= lastEnd) {
            merged[merged.length - 1][1] = Math.max(currentEnd, lastEnd);
        } 
        else {
            merged.push(intervals[i]);
        }
    }

    return merged;
};
