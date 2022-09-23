export class Plays {
    private health: number;
    private speed: number;

    setHealth(health: number) {
        if (health < 0){
            console.log("You cant set the Health below 0");
            return;
        }
        this.health =health;
    }

    getHealth() {
        return this.health;
    }

    setSpeed(speed: number) {
        this.speed = speed;
        }

    getSpeed() {
        return this.speed;
    }
}

const jerrie = new Plays();
jerrie.setHealth(5);
jerrie.setSpeed(3);

console.log(`Jerrie has ${jerrie.getHealth()}/10 health`);
console.log(`Jerrie has ${jerrie.getSpeed()} speed`);
