calcBMI = (mass, height) => {
    return BMI = mass / height ** 2;
}
console.log("Câu 1: ");
let markHigherBMI = true;
let BMIMarks = calcBMI(78, 1.69);
let BMIJohns = calcBMI(92, 1.95);
console.log("Test case 1: ");
console.log('BMI Marks: ', BMIMarks);
console.log('BMI John: ', BMIJohns);
{ BMIJohns > BMIMarks ? console.log(`John's BMI (${BMIJohns}) is higher than Mark's (${BMIMarks})!`) : console.log(`Mark's BMI (${BMIMarks}) is higher than John's (${BMIJohns})!`); }

let BMIMarks2 = calcBMI(95, 1.88);
let BMIJohns2 = calcBMI(85, 1.76);
console.log("Test case 2: ", calcBMI(60, 1.7));
console.log('BMI Marks: ', BMIMarks2);
console.log('BMI John: ', BMIJohns2);
{ BMIJohns2 > BMIMarks2 ? console.log(`John's BMI (${BMIJohns2}) is higher than Mark's (${BMIMarks2})!`) : console.log(`Mark's BMI (${BMIMarks2}) is higher than John's (${BMIJohns2})!`); }

console.log("------------------------------------------------------------------------------------");

console.log("Câu 2: ");
calcBMI = (mass, height) => {
    return BMI = mass / height ** 2;
}
markHigherBMI = true;
BMIMarks = calcBMI(78, 1.69);
BMIJohns = calcBMI(92, 1.95);
console.log("Test case 1: ");
console.log('BMI Marks: ', BMIMarks);
console.log('BMI John: ', BMIJohns);
{ BMIJohns > BMIMarks ? console.log(`John's BMI (${BMIJohns}) is higher than Mark's (${BMIMarks})!`) : console.log(`Mark's BMI (${BMIMarks}) is higher than John's (${BMIJohns})!`); }

BMIMarks2 = calcBMI(95, 1.88);
BMIJohns2 = calcBMI(85, 1.76);
console.log("Test case 2: ", calcBMI(60, 1.7));
console.log('BMI Marks: ', BMIMarks2);
console.log('BMI John: ', BMIJohns2);
{ BMIJohns2 > BMIMarks2 ? console.log(`John's BMI (${BMIJohns2}) is higher than Mark's (${BMIMarks2})!`) : console.log(`Mark's BMI (${BMIMarks2}) is higher than John's (${BMIJohns2})!`); }
console.log("------------------------------------------------------------------------------------");

console.log("Câu 3: ");
calcScoreAvg = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
checkWinner = (value1, value2) => {
    if (value1 > 100 && value2 > 100 && value1 > value2) {
        return "Congratulations team 1 wins";
    }
    else if (value1 > 100 && value2 > 100 && value1 < value2) {
        return "Congratulations team 1 wins";
    }
    else if (value1 > 100 && value2 > 100 && value1 === value2) {
        return "Team 1 and Team 2 draw";
    }
    else {
        return "No winner";
    }
}
console.log("Test data 1: ");
let scoreTeam1 = calcScoreAvg(96, 108, 89);
let scoreTeam2 = calcScoreAvg(88, 91, 110);
console.log(checkWinner(scoreTeam1, scoreTeam2));

console.log("Test data 2: ");
let scoreTeam3 = calcScoreAvg(97, 112, 101);
let scoreTeam4 = calcScoreAvg(109, 95, 123);
console.log(checkWinner(scoreTeam3, scoreTeam4));

console.log("Test data 3: ");
let scoreTeam5 = calcScoreAvg(97, 112, 101);
let scoreTeam6 = calcScoreAvg(109, 95, 106);
console.log(checkWinner(scoreTeam5, scoreTeam6));
console.log("------------------------------------------------------------------------------------");

console.log("Câu 4: ");
let calcTip = (bill) => {
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}

tip1 = calcTip(275);
tip2 = calcTip(40);
tip3 = calcTip(430);
console.log("Test data 1:")
console.log(`The bill was 275, the tip was ${tip1}, and the total value ${275 + tip1}`);
console.log(`The bill was 40, the tip was ${tip2}, and the total value ${275 + tip2}`);
console.log(`The bill was 430, the tip was ${tip3}, and the total value ${275 + tip3}`);