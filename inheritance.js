var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* base class */
var Animal = (function () {
    function Animal(name, speed, sound) {
        this._name = name;
        this._speed = speed;
        this._sound = sound;
    }
    Animal.prototype.animalInfo = function () {
        return ("The speed of " + this._name + " is " + this._speed + " km/hr and sound is " + this._sound);
    };
    return Animal;
}());
/* first extended class */
var cat = (function (_super) {
    __extends(cat, _super);
    function cat(speed) {
        return _super.call(this, "cat", speed, "meaw-meaw") || this;
    }
    return cat;
}(Animal));
/* second extended class */
var tiger = (function (_super) {
    __extends(tiger, _super);
    function tiger(speed) {
        return _super.call(this, "tiger", speed, "roar-roar") || this;
    }
    return tiger;
}(Animal));
/* first animal */
var animal1 = new cat(10);
/* second animal */
var animal2 = new tiger(40);
/* Information of animals */
function animalInfo() {
    document.getElementById("lblMessage1").innerHTML = animal1.animalInfo();
    document.getElementById("lblMessage2").innerHTML = animal2.animalInfo();
}
