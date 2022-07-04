const removeFromArray = function (array, ...target) {
  let result = Array();
  for (const number of array) {
    if (!toBeRemoved(number, target)) {
      result.push(number);
    }
  }

  return result;
};

function toBeRemoved(number, checklist) {
  let result = false;
  for (const checkNumber of checklist) {
    if (number === checkNumber) {
      return true;
    }
  }

  return result;
}

// Do not edit below this line
module.exports = removeFromArray;
