//Good Approch - O(1) Time Complexity
function add1(n) {
    return n * (n + 1) / 2;
}

//Bad Approch - O(n) Time Complexity
function add2(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += n;
    }
}

let t1 = performance.now();
add1(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

t1 = performance.now();
add2(10000000000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);