// A Closer Look at Functions

// Coding Challenge #1

const data1 = [5, 2, 3, 4];
const data2 = [1, 5, 3, 2];

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerAnswer() {
        const input = Number(
            prompt(
                `${this.question}\n${this.options.join("\n")}\n(Write option number)`
            )
        );
        if (input >= 0 && input < this.options.length && input !== null) {
            this.answers[input]++;
            this.displayResult();
        } else {
            alert("Invalid input");
        }
    },
    displayResult(type) {
        if (type === "array") {
            console.log(this.answers);
        }
        if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
};

poll.registerAnswer();
poll.displayResult();

poll.displayResult.call({ answers: data1 }, "array");
poll.displayResult.call({ answers: data1 }, "string");

poll.displayResult.call({ answers: data2 }, "array");
poll.displayResult.call({ answers: data2 }, "string");