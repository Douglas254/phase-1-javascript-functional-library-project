const rightInput = (struct) => {
  return Array.isArray(struct) ? struct.slice() : Object.values(struct);
};

/*
    calls alert with each element passed
    calls alert properly on object values
    returns the original collection
*/
const myEach = (coll, passedCallback) => {
  const arr = rightInput(coll);
  for (let i = 0; i < arr.length; i++) {
    passedCallback(arr[i]);
  }
  return coll;
};

/*
    successfully returns a correctly populated array
    does not modify the original array
    successfully returns a correctly populated array from modified object values
    does not modify the original object
*/
const myMap = (coll, passedCallback) => {
  const array = rightInput(coll);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(passedCallback(array[i]));
  }
  return newArray;
};

/*
    returns the correct reduced value when passed an initial value
    returns the correct reduced value when not passed an initial value
    does not modify the original array
    returns the correct reduced value from object values
    does not modify the original object
*/
const myReduce = (coll, passedCallback, acc) => {
  const array = rightInput(coll);
  const len = array.length;
  let i = 0;
  if (acc === undefined) {
    acc = array[i];
    i++;
  }

  for (; i < len; i++) {
    acc = passedCallback(acc, array[i], array);
  }
  return acc;
};

/*
    returns the value if found
    does not traverse the whole array if the value is found early
    returns undefined if the value is not present
*/
const myFind = (coll, passedCallback) => {
  const array = rightInput(coll);
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (passedCallback(array[i])) {
      return array[i];
    }
  }
};

/*
    correctly filters for values that the callback evaluates as true
    correctly returns an empty array if no matching values are found
*/
const myFilter = (coll, passedCallback) => {
  const array = rightInput(coll);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (passedCallback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

/*
    correctly returns the size of the collection when an array is passed
    correctly returns the size of the collection (amount of keys) when an object is passed
*/
const mySize = (coll) => {
  const array = rightInput(coll);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
  }
  return count;
};

/*
    returns the first element of the collection
    returns the first num elements of the collection when the second optional argument (num) is provided
*/
const myFirst = (coll, num) => {
  const array = rightInput(coll);
  if (num) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array[0];
  }
};

/*
    returns the last element of the collection
    returns the last num elemeumts of the collection when the second optional argument (num) is provided
*/
const myLast = (coll, num) => {
  const array = rightInput(coll);
  const len = array.length;
  let newArray = [];
  if (num) {
    for (let i = 0; i < num; i++) {
      newArray.unshift(array[len - i - 1]);
    }
    return newArray;
  } else {
    return array[len - 1];
  }
};

/*
    retrieves all the names of the object's own enumerable properties
    does not modify the original object
*/
const myKeys = (object) => {
  return Object.keys(object);
};

/*
    retrieves all the values of the object's own properties
    does not modify the original object
*/
const myValues = (object) => {
  return Object.values(object);
};
