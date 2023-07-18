function countingSort(arr) {
    var count = new Array(100).fill(0);
    
    arr.forEach(
        (Val) => {
            count[Val] += 1;
        }
    )
    return count;
}
