var Players = /** @class */ (function () {
    function Players() {
    }
    Players.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Players;
}());
var tom = new Players();
tom.name = "Tom";
tom.health = 10;
tom.isInvincible = true;
var jack = new Players();
jack.name = "Jack";
jack.health = 8;
jack.isInvincible = true;
tom.greet();
jack.greet();
