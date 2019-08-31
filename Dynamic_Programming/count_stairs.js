function countWaysDP(n, map, m){
    if(n < 0){
        return 0;
    } else if( n === 0){
        return 1;
    } else if(map[n] > -1){
        return map[n];
    } else {
        console.log("inside main method: " + n + " origin :" + m);
        map[n] = countWaysDP(n-1, map, n) + countWaysDP(n-2, map, n) + countWaysDP(n-3, map, n);
        return map[n];
    }
}
let map = [];
console.log(countWaysDP(3, map) + " array: "+ map);
