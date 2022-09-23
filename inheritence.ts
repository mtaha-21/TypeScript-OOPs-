class Animal {
    hunger: number;
    health: number;
    protected coordX: number;
    protected coordY: number;

    setCoordX(x: number) {
        this.coordX = x
    }
    setCoordY(y: number) {
        this.coordY = y
    }

    eat() {
        console.log("I'm eating");
    }
    sleep() {
        console.log("I'm sleeping ");
    }
    move() {
        console.log("Im moving");
    }
    makeNoise() {
        console.log("Make noise");
    }
}

class Dog extends Animal {
    // overide makenoise 
    makeNoise(): void {
        console.log("Bark");
    }
    returnToOwner() {
        console.log(`I'm at (${this.coordX}, ${this.coordY}), and now I'm returning to owner`);
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log("Meoowww")
    }
}

const dog = new Dog();
dog.makeNoise();
dog.setCoordX(10)
dog.setCoordY(10);
dog.returnToOwner();

const cat = new Cat();
cat.makeNoise();