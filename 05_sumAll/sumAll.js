const sumAll = function (first, second) {
  if (!isValid(first, second)) return "ERROR";
  let result = 0;
  let bigger = first > second ? first : second;
  let smaller = first < second ? first : second;
  for (let i = smaller; i <= bigger; i++) {
    result += i;
  }
  return result;
};

function isValid(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    return false;
  } else if (first < 0 || second < 0) {
    return false;
  }

  return true;
}

// Do not edit below this line
module.exports = sumAll;
