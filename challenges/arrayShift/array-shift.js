const arr = [1, 2, 3, 4, 5];
const stringThing = 'This is a String';

const arrayShifter = (stringThing, arr) => {
  let arrayShifted = arr;
  const halfway = arr.length / 2;
  arrayShifted.splice(halfway, 0, stringThing);
  return arrayShifted;
};

const shiftThing = arrayShifter(stringThing, arr);
console.log(shiftThing);

module.exports = { arrayShifter };
