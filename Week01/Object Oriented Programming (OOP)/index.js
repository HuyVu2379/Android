class Car {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
};
let car1 = new Car('Toyota', 120);
let car2 = new Car('BMW', 150);

console.log("Câu 1:");

// Experiment with calling accelerate and brake methods
car1.accelerate(); // Toyota going at 130 km/h
car1.brake();      // Toyota going at 125 km/h
car1.accelerate(); // Toyota going at 135 km/h

car2.accelerate(); // BMW going at 160 km/h
car2.brake();      // BMW going at 155 km/h
car2.brake();      // BMW going at 150 km/h