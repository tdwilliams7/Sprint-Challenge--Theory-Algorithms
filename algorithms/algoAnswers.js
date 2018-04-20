excerise 1:
a. O(n);
b. O(log n);
c. O(n*2);
d. O(n log n);
e. O(n^4);
f. O(n);
g. O(n);


excerise 2:
// A
const max = (values) => {
  let high = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < values[i + 1]) {
      high = values[i + 1];
    }
  }
  return high;
}

max([1, 2, 3, 54, 34]);

// B

// binary search problem. start at n/2
// if doesn't break move up (n/2)/2. if does move down (n/2)/2;
// keep going until you get to the floor.

// C
a. O(log n) because it still has to go through each place and check against the others

b.  O(n log n) seems right.. 
