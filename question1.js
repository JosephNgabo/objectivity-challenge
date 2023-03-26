//This function takes the in two arrays and returns two array of modifications

function comparingArrays(originalArray, updatedArray) {
  const newElement = updatedArray.filter((element) => !originalArray.includes(element));
  const removedElement = originalArray.filter((element) => !updatedArray.includes(element));
  return [newElement, removedElement];
}
