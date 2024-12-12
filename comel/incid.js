// Sample data
const groups = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Function to compute sum of a group
function computeSum(group) {
  return group.reduce((acc, curr) => acc + curr, 0);
}

// Compute sum of each group
const sums = groups.map(group => computeSum(group));

// Sort groups based on sum
const sortedGroups = groups.slice().sort((a, b) => {
  const sumA = computeSum(a);
  const sumB = computeSum(b);
  return sumA - sumB;
});

console.log("Sums of groups:", sums);
console.log("Sorted groups:", sortedGroups);
