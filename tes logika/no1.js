const sock = (arr) => {
  let container = 0;
  const uniqueCount = Array.from(new Set(arr));

  for (let i = 0; i < uniqueCount.length; i++) {
    let sockCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === uniqueCount[i]) {
        sockCount = sockCount + 1;
      }
    }
    if (sockCount % 2 === 0) {
      container += sockCount / 2;
    } else {
      container += (sockCount - 1) / 2;
    }
  }
  return container;
};

console.log(sock([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sock([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(sock([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
