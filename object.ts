class Players {
    name: String;
    health: Number;
    isInvincible: boolean;
 
 greet() {
    console.log(`Hello, my name is ${this.name}`);
 }
}

const tom =new Players();
tom.name = "Tom";
tom.health = 10;
tom.isInvincible = true;

const jack =new Players();
jack.name = "Jack";
jack.health = 8;
jack.isInvincible = true;

tom.greet();
jack.greet();