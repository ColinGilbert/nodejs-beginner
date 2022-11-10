const rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};

const solveRect = (l, b) => {
  console.log("Solving for rectangle with length " + l + " and breadth " + b);
  if (l <= 0 || b <= 0) {
    console.log("Rectangle needs length and breadth > 0");
  } else {
    console.log("The area of the rectangle is " + rect.area(l, b));
    console.log("The perimeter of the rectangle is " + rect.perimeter(l, b));
  }
};

solveRect(2, 4);
solveRect(3, 0);
solveRect(0, 5);
solveRect(-1, 3);
solveRect(2, -8);
solveRect(-4, -5);
solveRect(0, 0);
