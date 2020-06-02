const map = (arr, mapFunction) => {
  let mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    mapArr[i] = mapFunction(arr[i]);
  }
  return mapArr;
};

module.exports = { map };
