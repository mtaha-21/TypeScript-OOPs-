// export{}
var Plays = /** @class */ (function () {
    function Plays() {
    }
    Plays.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("You cant set the Health below 0");
            return;
        }
        this.health = health;
    };
    Plays.prototype.getHealth = function () {
        return this.health;
    };
    Plays.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Plays.prototype.getSpeed = function () {
        return this.speed;
    };
    return Plays;
}());
var jerrie = new Plays();
jerrie.setHealth(5);
jerrie.setSpeed(3);
console.log("Jerrie has ".concat(jerrie.getHealth(), "/10 health"));
console.log("Jerrie has ".concat(jerrie.getSpeed(), " speed"));
