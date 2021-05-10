let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];
for (let i = 0; i < board.length; i++) {
    const element = board[i];

    for (let i = 0; i < element.length; i++) {
        const element1 = element[i];
        console.log(element1);

    }
}
 

// 2. Doggo

const doggo = {
    name : "Sweety",
    breed: "husky",
    favoriteFood : [ "Pedigree", "eggs", "bone"]
}

console.log(doggo.favoriteFood[2]);

let allFood = doggo.favoriteFood;

for (let i = 0; i < allFood.length; i++) {
    console.log(allFood[i]);

    
    
}
