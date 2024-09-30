let calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
let checkWinner = (team1, team2) => {
    return team1 > team2 * 2 ? `Dolphins win(${team1} vs ${team2})` : `Koalas win(${team2} vs ${team1})`;
}
console.log("JavaScript Fundamentals")
console.log("Câu 1: ");
console.log("Test data 1: ");
console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
console.log("Test data 2: ");
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));
console.log("------------------------------------------------------------------------------------");

console.log("Câu 2: ");

let calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("Test data 1: ");
console.log(`The bill was ${bills[0]}, the tip was ${tips[0]}, and the total value ${totals[0]}`);
console.log(`The bill was ${bills[1]}, the tip was ${tips[1]}, and the total value ${totals[1]}`);
console.log(`The bill was ${bills[2]}, the tip was ${tips[2]}, and the total value ${totals[2]}`);
console.log("------------------------------------------------------------------------------------");

console.log("Câu 3: ");
let Masks = {
    fullName: "(Mark Miller",
    mass: 78,
    height: 1.69,
}
let John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
}
let calcBMI = (mass, height) => {
    return mass / height ** 2;
}
console.log('Test data: ');
let BMIMask = calcBMI(Masks.mass, Masks.height);
let BMIJonh = calcBMI(John.mass, John.height)
BMIMask > BMIJonh ? console.log(`${Masks.fullName}'s BMI (${BMIMask}) is higher than ${John.fullName}'s (${BMIJonh})`)
    : (`${John.fullName}'s BMI (${BMIJonh}) is higher than ${Masks.fullName}'s (${BMIMask})`);
console.log("------------------------------------------------------------------------------------");

console.log("Câu 4: ")

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = []
totals = []
let sum = 0
for (let index = 0; index < bills.length; index++) {
    tips[index] = calcTip(bills[index]);
    totals[index] = bills[index] + tips[index];
    sum += totals[index]
}
console.log("Array tips: ", tips)
console.log("Array totals: ", totals)
console.log("Average totals: " + sum / totals.length)

console.log("------------------------------------------------------------------------------------");
