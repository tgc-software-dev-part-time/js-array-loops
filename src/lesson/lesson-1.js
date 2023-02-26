const fruitStr = "apple orange mongo durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" ");
let input = "banana";

let hasMatch = false; // Use to check if there is a match

    for (let i = 0; i < fruits.length; i++) {
        const currentFruit = fruits[i];
        if (currentFruit.toLowerCase() === input.toLowerCase()) {
            console.log("Congratulations!!");
            hasMatch = true; // Set to true when there is a match
            break;
        }
        console.log(currentFruit);
    }

    if (!hasMatch) console.log("Word has no match."); // Notify user when there is no match