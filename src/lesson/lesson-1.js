const fruitStr =
  "apple orange mongo durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" ");
let input = "banana";
console.log("Fruit to look for:", input);

let hasMatch = false; // Use to check if there is a match

for (let i = 0; i < fruits.length; i++) {
  const currentFruit = fruits[i];
  console.log("Current Fruit:", currentFruit);

  if (currentFruit.toLowerCase() === input.toLowerCase()) {
    hasMatch = true;
    console.log("Congratulations!! You have found the fruit");
  }

  //To break the loop when there is a match
  if (hasMatch) {
    break;
  }
}

// Notify user when there is no match
if (!hasMatch) {
  console.log("Fruit is not found.");
}
