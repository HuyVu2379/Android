//Câu 1
const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]
const dogsJulia1 = [9, 16, 6, 8, 3]
const dogsKate2 = [10, 5, 6, 1, 4]
let checkDog = function (arr1, arr2) {
    let copyDogsJulia = [...arr1]
    copyDogsJulia.shift()
    copyDogsJulia.splice(2, 2);
    let DogJuliaAndKate = copyDogsJulia.concat(arr2)
    DogJuliaAndKate.forEach((value, index) => {
        value >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${value} years old`)
            : console.log(`Dog number ${index + 1} is still a puppy`);
    })
}

checkDog(dogsJulia, dogsKate)
checkDog(dogsJulia1, dogsKate2)

Array.prototype.sum = function () {
    let sum = 0
    this.forEach(e => {
        sum += e;
    })
    return sum
}
let calcAverageHumanAge = function (arr) {
    let hummanAge = []
    let copyArr = [...arr]
    arr.forEach((value, index) => {
        hummanAge[index] = (value <= 2 ? 2 * value : 16 + value * 4)
        if (hummanAge[index] < 18) {
            copyArr.splice(index, 1)
        }
    })
    let avgOld = copyArr.sum() / copyArr.length;
    console.log("1.");
    console.log(hummanAge);
    console.log("2.");
    console.log(copyArr);
    console.log("3.");
    console.log("Average humman old of all adult dogs:" + avgOld);
}
const Data1 = [5, 2, 4, 1, 15, 8, 3]
const Data2 = [16, 6, 10, 5, 6, 1, 4]

//Câu 2
console.log("----------------------------------------------------------------------------");
console.log("Câu 2: ");
console.log("Test data 1: ");
calcAverageHumanAge(Data1)
console.log("Test data 2: ");
calcAverageHumanAge(Data2)

//Câu 3
console.log("Câu 3:");
let calcAverageHumanAge2 = (arr) => {
    let hummanAge = []
    let copyArr = [...arr]
    arr.forEach((value, index) => {
        hummanAge[index] = (value <= 2 ? 2 * value : 16 + value * 4)
        if (hummanAge[index] < 18) {
            copyArr.splice(index, 1)
        }
    })
    let avgOld = copyArr.sum() / copyArr.length;
    console.log("Average humman old of all adult dogs:" + avgOld);
}
console.log("Test data 1: ");
let data1 = [5, 2, 4, 1, 15, 8, 3]
let data2 = [16, 6, 10, 5, 6, 1, 4]
console.log(calcAverageHumanAge2(data1));
console.log("Test data 2: ");
console.log(calcAverageHumanAge2(data2));

console.log("Câu 4: ");
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    dog.recommendedFood = Math.pow(dog.weight, 0.75) * 28
});
console.log("1: ");
console.log(dogs);
console.log("2: ");
// Tìm chó của Sarah
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

// Kiểm tra xem chó của Sarah ăn quá nhiều hay quá ít
if (sarahsDog) {
    if (sarahsDog.curFood > sarahsDog.recommendedFood) {
        console.log("Sarah's dog is eating too much");
    } else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
        console.log("Sarah's dog is eating too little");
    } else {
        console.log("Sarah's dog is eating the right amount");
    }
} else {
    console.log("Sarah's dog not found");
}

console.log('3:');

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach(dog => {
    if (dog.curFood > dog.recommendedFood) {
        ownersEatTooMuch = ownersEatTooMuch.concat(dog.owners);
    } else if (dog.curFood < dog.recommendedFood) {
        ownersEatTooLittle = ownersEatTooLittle.concat(dog.owners);
    }
});
console.log('Owners of dogs who eat too much:', ownersEatTooMuch);
console.log('Owners of dogs who eat too little:', ownersEatTooLittle);

console.log("4: ");
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little`);

console.log("5: ");
const isAnyDogEatingExactmout = dogs.some(dog => {
    dog.curFood === dog.recommendedFood
})
console.log(isAnyDogEatingExactmout);

console.log("7:");

const dogsEatingOkayAmount = dogs.filter(dog => {
    const lowerBound = dog.recommendedFood * 0.9;
    const upperBound = dog.recommendedFood * 1.1;
    return dog.curFood >= lowerBound && dog.curFood <= upperBound;
});

console.log('Dogs eating an okay amount of food:', dogsEatingOkayAmount);

console.log("8: ");
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Sorted dogs by recommended food portion:', sortedDogs);

