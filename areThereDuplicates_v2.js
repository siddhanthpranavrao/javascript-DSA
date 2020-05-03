function areThereDuplicates1() {
  return new Set(arguments).size !== arguments.length;
}

function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a - b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1('a', 'b', 'c', 'a'));
console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2('a', 'b', 'c', 'a'));