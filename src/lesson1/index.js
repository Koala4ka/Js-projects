const calc = {
  sum: (...args) => args.reduce((acc, n) => acc + n, 0),
  substract: (...args) => args.reduce((acc, n) => acc - n),
  devide: (...args) => args.reduce((acc, n) => acc / n),
  multy: (...args) => args.reduce((acc, n) => acc * n),
};


function lesson1() {
  console.log('lesson1');

  console.log(calc.sum(1, 2, 3) === 6);
  console.log(calc.substract(12, 2) === 10);
  console.log(calc.devide(12, 2) === 6);
  console.log(calc.multy(1, 2, 3, 4) === 24);
}

export default lesson1;
