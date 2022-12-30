const foo = numbers => {
  numbers = numbers.split(' ').map(Number);

  let even = 0;
  let odd = 0;
  let evenIdx = 0;
  let oddIdx = 0;

  numbers.forEach((number, i) => {
    if (number % 2 === 0) {
      even++;
      evenIdx = i + 1;
    } else {
      odd++;
      oddIdx = i + 1;
    }
  });

  if (even === 1) return evenIdx;
  else if (odd === 1) return oddIdx;
};
