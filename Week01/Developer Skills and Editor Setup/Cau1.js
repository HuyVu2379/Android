console.log("Developer Skills & Editor Setup")
console.log("Câu 1: ")
let data1 = [17, 21, 23]
let data2 = [12, 5, -5, 0, 5]
let printForecast = (data) => {
    for (let index = 0; index < data.length; index++) {
        console.log(`${data[index]} \u2103 in ${index + 1} days`)
    }
    return;
}
console.log("Test data 1:")
console.log(printForecast(data1))
console.log("Test data 2:")
console.log(printForecast(data2))

console.log("------------------------------------------------------------------------------------");