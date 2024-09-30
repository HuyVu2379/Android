const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const PlusSubtitutePlayers = (arrSubtitute) => {
    let players1Final = [...game.players[0], ...arrSubtitute];
    return players1Final;
};

const printGoals = (object) => {
    // Khởi tạo đối tượng để lưu trữ số lần ghi bàn của từng cầu thủ
    let goalCounts = {};

    // Duyệt qua danh sách cầu thủ ghi bàn
    for (let player of object.scored) {
        // Nếu cầu thủ đã tồn tại trong goalCounts, tăng giá trị lên 1
        if (goalCounts[player]) {
            goalCounts[player]++;
        } else {
            // Nếu cầu thủ chưa tồn tại trong goalCounts, khởi tạo giá trị là 1
            goalCounts[player] = 1;
        }
    }

    // In kết quả ra console
    for (let player in goalCounts) {
        console.log(`${player} had scored: ${goalCounts[player]}`);
    }
};
const TeamWin = (team1, team2) => {
    return team1 < team2 && game.team1 || game.team2;
};

console.log("4:");
console.log("All players: ");
console.log(PlusSubtitutePlayers(['Thiago', 'Coutinho', 'Perisic']));

console.log("Goals scored:");
printGoals(game);

console.log("Winning team:");
console.log(TeamWin(game.odds.team1, game.odds.team2));
console.log("------------------------------------------------------------------");

console.log("Câu 2:");
const printGoals2 = (object) => {
    // Khởi tạo đối tượng để lưu trữ số lần ghi bàn của từng cầu thủ
    let goalCounts = {};

    // Duyệt qua danh sách cầu thủ ghi bàn
    for (let player of object.scored) {
        // Nếu cầu thủ đã tồn tại trong goalCounts, tăng giá trị lên 1
        if (goalCounts[player]) {
            goalCounts[player]++;
        } else {
            // Nếu cầu thủ chưa tồn tại trong goalCounts, khởi tạo giá trị là 1
            goalCounts[player] = 1;
        }
    }

    // In kết quả ra console
    for (let player in goalCounts) {
        console.log(`Goal ${goalCounts[player]}: ${player}`);
    }
};

console.log("Goals scored:");
console.log("1:");
console.log(printGoals2(game));

const calcAvgOdd = (odds) => {
    let values = Object.values(odds);
    let sum = 0;
    values.forEach(value => {
        sum += value
    }
    )
    return sum / values.length;
};
console.log("2:");
console.log("Average odds: " + calcAvgOdd(game.odds));
const printOdd = (game) => {
    Object.entries(game.odds).forEach(([key, value]) => {
        if (key === 'team1') {
            console.log("Odd of victory " + game.team1 + ": " + value)
        }
        else if (key === 'team2') {
            console.log("Odd of victory " + game.team2 + ": " + value)
        }
        else {
            console.log('Odd of draw:', value)
        }
    })
};
console.log("3:");
console.log(printOdd(game))

const getScorers = (object) => {
    let goalCounts = {};

    // Duyệt qua danh sách cầu thủ ghi bàn
    for (let player of object.scored) {
        // Nếu cầu thủ đã tồn tại trong goalCounts, tăng giá trị lên 1
        if (goalCounts[player]) {
            goalCounts[player]++;
        } else {
            // Nếu cầu thủ chưa tồn tại trong goalCounts, khởi tạo giá trị là 1
            goalCounts[player] = 1;
        }
    }
    return goalCounts
}
console.log(getScorers(game))

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

console.log("Câu 3:")
// 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log("1:")
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Remove the unfair yellow card event from minute 64
console.log("2:")
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the average time between events
console.log("3:")
const totalMinutes = 90;
const averageTime = totalMinutes / gameEvents.size;
console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);

// 4. Loop over 'gameEvents' and log each element, marking whether it's in the first or second half
console.log("4:")
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
}
console.log('Câu 4:');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('br'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Click to convert';
let textarea = document.querySelector('textarea');
button.addEventListener('click', function () {
    let wordsArray = [];
    let content = textarea.value.split('\n');
    content.forEach(line => {
        let words = line.split('_'); // Tách từng từ qua dấu gạch dưới
        wordsArray.push(words); // Thêm các từ vào mảng
    }
    )
    let resultArr = [];
    wordsArray.forEach(subArr => {
        let tempArr = [];
        subArr.forEach((word, index) => {
            if (index === 0) {
                tempArr.push(word.charAt(0).toLowerCase() + word.slice(1)); // Không in hoa chữ cái đầu tiên của phần tử đầu tiên
            } else {
                tempArr.push(word.charAt(0).toUpperCase() + word.slice(1)); // In hoa chữ cái đầu tiên của các phần tử khác
            }
        });
        resultArr.push(tempArr.join('')); // Kết hợp các từ trong mảng con thành một chuỗi
    });
    console.log(resultArr)
})